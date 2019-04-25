import { h } from 'preact';
import * as style from './style';

export default function PageHeading ({ children }) {
  return (
    <h1 class={style.heading}>{children}</h1>
  );
}
