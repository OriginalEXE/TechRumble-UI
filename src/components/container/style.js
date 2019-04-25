import { css } from 'linaria';
import { getSpacing } from '../../utils/spacing';

export const container = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${getSpacing (12)};
  padding-right: ${getSpacing (12)};
  width: 100%;
`;
