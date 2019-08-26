/**
 * Taken from https://github.com/system-ui/theme-ui/blob/9656dba5f22205427d4c36dd9181b6a24b85dd91/packages/theme-ui/src/color-modes.js
 */
import React, { useState, useEffect, createContext } from 'react';

const STORAGE_KEY = 'varun-ca-color-mode';

const storage = {
  get: init => window.localStorage.getItem(STORAGE_KEY) || init,
  set: value => window.localStorage.setItem(STORAGE_KEY, value),
};

const getMediaQuery = () => {
  const darkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia ? window.matchMedia(darkQuery) : {};
  const dark = mql.media === darkQuery;
  return dark && mql.matches;
};

export const useColorState = initialColorMode => {
  const [mode, setMode] = useState(initialColorMode);

  useEffect(() => {
    // initialize
    const stored = storage.get();
    document.body.classList.remove('varun-ca-' + stored);
    const dark = getMediaQuery();
    if (!stored && dark) return setMode('dark');
    if (!stored || stored === mode) return;
    setMode(stored);
  }, []);

  useEffect(() => {
    if (!mode) return;
    storage.set(mode);
  }, [mode]);

  return [mode, setMode];
};

export const useColorMode = initialMode => {
  const [mode, setMode] = useColorState(initialMode);

  const setColorMode = () => {
    setMode(state => (state === 'light' ? 'dark' : 'light'));
  };

  return [mode, setColorMode];
};

export const InitializeColorMode = () => (
  <script
    key="varun-ca-no-flash"
    dangerouslySetInnerHTML={{
      __html: `(function() { try {
        var mode = localStorage.getItem('${STORAGE_KEY}');
        if (!mode) return
        document.body.classList.add('varun-ca-' + mode);
      } catch (e) {} })();`,
    }}
  />
);

export const ColorModeContext = createContext({
  mode: 'light',
  setColorMode: () => {},
});
