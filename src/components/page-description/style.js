import { css } from 'linaria';
import { getColor } from '../../utils/colors';
import { getSpacing } from '../../utils/spacing';
import { getFontSize } from '../../utils/font-sizes';

export const description = css`
  color: ${getColor ('primary1') (500)};
  font-size: ${getFontSize (18)};
  margin-bottom: ${getSpacing (24)};
  margin-top: 0;

  html:not(.wf-active) & {
    font-weight: 400;
    letter-spacing: -0.044em;
  }
`;
