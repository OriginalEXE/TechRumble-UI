import { css } from 'linaria';
import { getColor } from '../../utils/colors';

export const app = css`
  :global() {
    @font-face {
      font-family: 'Noto Sans';
      src:
        url(../../fonts/noto-sans/subset-NotoSans-Italic.woff2) format('woff2'),
        url(../../fonts/noto-sans/subset-NotoSans-Italic.woff) format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src:
        url(../../fonts/noto-sans/subset-NotoSans.woff2) format('woff2'),
        url(../../fonts/noto-sans/subset-NotoSans.woff) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src:
        url(../../fonts/noto-sans/subset-NotoSans-Bold.woff2) format('woff2'),
        url(../../fonts/noto-sans/subset-NotoSans-Bold.woff) format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Cabin';
      src:
        url(../../fonts/cabin/subset-Cabin-SemiBold.woff2) format('woff2'),
        url(../../fonts/cabin/subset-Cabin-SemiBold.woff) format('woff');
      font-weight: 600;
      font-style: normal;
    }

    html {
      box-sizing: border-box;
      height: 100%;
    }

    body {
      color: ${getColor ('neutral1') (0)};
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }

    .wf-active body {
      font-family: 'Noto Sans', Helvetica, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
    }

    .wf-active h1,
    .wf-active h2,
    .wf-active h3,
    .wf-active h4,
    .wf-active h5,
    .wf-active h6 {
      font-family: 'Cabin', Helvetica, sans-serif;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }

  background-color: ${getColor ('neutral1') (0)};
  min-height: 100vh;
`;
