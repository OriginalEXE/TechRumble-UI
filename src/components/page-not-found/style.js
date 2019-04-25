import { css } from 'linaria';
import { getColor } from '../../utils/colors';
import { getFontSize } from '../../utils/font-sizes';

export const container = css`
  text-align: center;
`;

export const title = css`
  color: ${getColor ('primary1') (500)};
  font-size: ${getFontSize (24)};
  text-align: center;
`;
