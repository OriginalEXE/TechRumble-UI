import { css } from 'linaria';
import rem from 'remcalc';
import { getColor } from '../../utils/colors';
import { getSpacing } from '../../utils/spacing';
import { getFontSize } from '../../utils/font-sizes';

export const button = css`
  appearance: none;
  background-color: ${getColor ('neutral1') (0)};
  border: 0;
  border-radius: ${rem (4)};
  box-shadow: none;
  color: ${getColor ('primary1') (500)};
  cursor: pointer;
  display: inline-block;
  font-size: ${getFontSize (14)};
  outline-color: ${getColor ('primary2') (300)};
  padding: ${getSpacing (8)} ${getSpacing (12)};
  text-decoration: none;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${getColor ('neutral1') (500)};
    color: ${getColor ('neutral1') (0)};
  }

  html:not(.wf-active) & {
    letter-spacing: 0.014em;
  }
`;

export const buttonPrimary = css`
  background-color: ${getColor ('primary1') (300)};
  color: ${getColor ('neutral1') (0)};
`;
