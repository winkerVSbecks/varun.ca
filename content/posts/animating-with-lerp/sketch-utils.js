import { lerp, damp } from 'canvas-sketch-util/math';

const dot = ([ax, ay], [bx, by]) =>
  (ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by));

export const movementTypes = {
  lerp: (config, { playhead }, [start, end]) => {
    return [lerp(start[0], end[0], playhead), lerp(start[1], end[1], playhead)];
  },
  damp: (config, { deltaTime }, [start, end], pos) => {
    return [
      damp(pos[0], end[0], config.lambda, deltaTime),
      damp(pos[1], end[1], config.lambda, deltaTime),
    ];
  },
  spring: (config, { deltaTime }, [start, end], pos, spd) => {
    spd[0] = lerp(
      spd[0],
      (end[0] - pos[0]) * config.spring.stiffness,
      config.spring.damping
    );
    spd[1] = lerp(
      spd[1],
      (end[1] - pos[1]) * config.spring.stiffness,
      config.spring.damping
    );

    return [pos[0] + spd[0], pos[1] + spd[1]];
  },
  slerp: (config, { playhead }, [start, end]) => {
    const angle = Math.acos(dot(start, end));

    const factor1 = Math.sin(angle * (1 - playhead)) / Math.sin(angle);
    const factor2 = Math.sin(angle * playhead) / Math.sin(angle);

    return [
      start[0] * factor1 + end[0] * factor2,
      start[1] * factor1 + end[1] * factor2,
    ];
  },
};

/**
 * Sketch Utils
 */
export function runSketch(canvasEl, { width, height, ...props }) {
  const context = canvasEl.getContext('2d');
  canvasEl.style.width = width + 'px';
  canvasEl.style.height = height + 'px';

  const scale = window.devicePixelRatio;
  canvasEl.getContext('2d').scale(scale, scale);

  const scaledWidth = Math.floor(width * scale);
  const scaledHeight = Math.floor(height * scale);
  canvasEl.width = scaledWidth;
  canvasEl.height = scaledHeight;

  let running = true;
  let destroy = () => {
    running = false;
  };

  let draw = (sketch) => {
    const { begin, render } = sketch({
      width: scaledWidth,
      height: scaledHeight,
      ...props,
    });

    begin({ context, width: scaledWidth, height: scaledHeight, ...props });

    animLoop(() => {
      render({ context, width: scaledWidth, height: scaledHeight, ...props });
      return running;
    });
  };

  return { destroy, draw };
}

function animLoop(render) {
  var running,
    lastFrame = +new Date();
  function loop(now) {
    // stop the loop if render returned false
    if (running !== false) {
      requestAnimationFrame(loop);
      running = render(now - lastFrame, now);
      lastFrame = now;
    }
  }
  loop(lastFrame);
}
