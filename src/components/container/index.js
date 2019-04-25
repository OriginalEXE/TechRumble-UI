import { h } from 'preact';
import rem from 'remcalc';
import * as style from './style';

export default function Container ({
  children,
  maxWidth = 1100,
}) {
  return (
    <div
      class={style.container}
      style={{
        maxWidth: rem (maxWidth),
      }}
    >{children}</div>
  );
}
