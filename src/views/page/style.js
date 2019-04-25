import { css } from 'linaria';
import { getSpacing } from '../../utils/spacing';
import { getColor } from '../../utils/colors';

export const content = css`
  padding-bottom: ${getSpacing (24)};
  padding-top: ${getSpacing (32)};
`;

export const footer = css`
  color: ${getColor ('neutral1') (1000)};
  margin-bottom: ${getSpacing (16)};
  margin-top: ${getSpacing (16)};
  text-align: center;
`;
