import { keyframes } from '@vanilla-extract/css';

export const fadeIn = keyframes({
  form: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  form: { opacity: 1 },
  to: { opacity: 0 },
});
