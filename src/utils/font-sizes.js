import rem from 'remcalc';

const allowedSizes = [
  12,
  14,
  16,
  18,
  20,
  24,
  30,
  36,
  48,
  60,
  72,
];

const fontSizes = allowedSizes.reduce ((sizes, size) => ({
  ...sizes,
  [size]: rem (size),
}), []);

export const getFontSize = size => fontSizes[size];
