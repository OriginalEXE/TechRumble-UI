import { h } from 'preact';
import * as style from './style';

export default function PageDescription ({ children }) {
  return (
    <p class={style.description}>{children}</p>
  );
}
