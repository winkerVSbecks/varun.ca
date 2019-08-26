/**
 * Based on
 * https://github.com/system-ui/theme-ui/blob/47e22668baff902fdca524d63e446afa78def9a0/packages/theme-ui/src/custom-properties.js
 */
const toVarName = key => `--varun-ca-${key}`;
const toVarValue = (key, value) => `var(${toVarName(key)}, ${value})`;
const join = (...args) => args.filter(Boolean).join('-');

// convert theme values to custom properties
export const toCustomProperties = (obj, parent) => {
  const next = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    const name = join(parent, key);
    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name, key);
      continue;
    }

    next[key] = toVarValue(name, value);
  }

  return next;
};

export const objectToVars = (parent, obj) => {
  let vars = {};
  for (let key in obj) {
    if (key === 'modes') continue;
    const name = join(parent, key);
    const value = obj[key];
    if (value && typeof value === 'object') {
      vars = {
        ...vars,
        ...objectToVars(name, value),
      };
    } else {
      vars[toVarName(name)] = value;
    }
  }
  return vars;
};

const createBorderStyles = colors => ({
  main: `1px solid ${toVarValue('colors-brand-main', colors.brand.main)}`,
  bright: `1px solid ${toVarValue('colors-brand-bright', colors.brand.bright)}`,
  faded: `1px solid ${toVarValue('colors-brand-faded', colors.brand.faded)}`,
});

export const createColorModeStyles = modes => {
  const globalStyles = {};
  const colors = {};
  const borders = {};

  Object.keys(modes).forEach(mode => {
    const key = `&.varun-ca-${mode}`;
    globalStyles[key] = objectToVars('colors', modes[mode]);

    colors[mode] = toCustomProperties(modes[mode]);
    borders[mode] = createBorderStyles(colors[mode]);
  });

  return { globalStyles, colors, borders };
};
