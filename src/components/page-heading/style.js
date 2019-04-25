import { css } from 'linaria';
import { getColor } from '../../utils/colors';
import { getSpacing } from '../../utils/spacing';
import { getFontSize } from '../../utils/font-sizes';

export const heading = css`
  color: ${getColor ('primary1') (500)};
  font-size: ${getFontSize (30)};
  margin-bottom: ${getSpacing (12)};
  margin-top: 0;

  html:not(.wf-active) & {
    font-weight: 400;
    letter-spacing: -0.044em;
  }

  span {
    color: ${getColor ('primary2') (700)};
  }
`;
