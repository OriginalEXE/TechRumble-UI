import { css } from 'linaria';
import rem from 'remcalc';
import { getColor } from '../../utils/colors';
import { getSpacing } from '../../utils/spacing';
import { getFontSize } from '../../utils/font-sizes';
import { loading as techTableLoading } from '../tech-table/style';

const loadingAnimation = `
  @keyframes loading {
    0% {
      background-color: ${getColor ('neutral1') (400)};
    }

    100% {
      background-color: ${getColor ('neutral1') (300)};
    }
  }
`;

export const card = css`
  align-items: center;
  background-color: ${getColor ('primary1') (500)};
  border-radius: ${rem (4)};
  display: grid;
  grid-gap: ${getSpacing (8)};
  grid-template-columns: auto ${rem (32)};
  padding: ${getSpacing (16)};
  position: relative;
`;

export const icon = css`
  background-color: ${getColor ('neutral1') (0)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: ${rem (12)} solid transparent;
  border-bottom-left-radius: ${rem (4)};
  height: ${rem (48)};
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
  width: ${rem (48)};

  .${techTableLoading} & {
    opacity: 0;
  }
`;

export const body = css`
  grid-column-start: 1;
`;

export const header = css`
  transition: opacity 0.2s ease-in-out;

  ${loadingAnimation}

  .${techTableLoading} & {
    animation: loading 1s infinite alternate;
    border-radius: ${rem (4)};
    opacity: 0.5;
    text-indent: -${rem (99999)};
  }
`;

export const name = css`
  font-size: ${getFontSize (18)};
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;

  html:not(.wf-active) & {
    font-weight: 400;
    letter-spacing: -0.044em;
  }
`;

export const description = css`
  font-size: ${getFontSize (14)};
  font-style: italic;
  margin-bottom: ${getSpacing (16)};
  margin-top: 0;
  transition: opacity 0.2s ease-in-out;

  html:not(.wf-active) & {
    letter-spacing: -0.014em;
  }

  ${loadingAnimation}

  .${techTableLoading} & {
    animation: loading 1s infinite alternate;
    border-radius: ${rem (4)};
    opacity: 0.3;
    text-indent: -${rem (99999)};
  }
`;

export const mentions = css`
  margin-bottom: ${getSpacing (16)};
  margin-top: 0;

  html:not(.wf-active) & {
    letter-spacing: 0.034em;
  }
`;

export const mentionsValue = css`
  color: ${getColor ('primary2') (300)};
  display: inline-block;
  font-weight: 700;
  transition: opacity 0.2s ease-in-out;

  ${loadingAnimation}

  .${techTableLoading} & {
    animation: loading 1s infinite alternate;
    border-radius: ${rem (4)};
    min-width: ${rem (30)};
    opacity: 0.3;
    text-indent: -${rem (99999)};
  }
`;

export const actions = css`
  display: grid;
  grid-gap: ${rem (4)};
  grid-template-columns: auto auto;
  justify-content: start;
  justify-items: start;
  transition: opacity 0.2s ease-in-out;

  .${techTableLoading} & {
    opacity: 0;
    pointer-events: none;
  }
`;
