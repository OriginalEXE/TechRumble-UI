import { h } from 'preact';
import { Ghost } from 'react-kawaii';
import * as style from './style';
import { getColor } from '../../utils/colors';
import optimizeLineBreak from '../../utils/optimize-line-break';

export default function PageNotFound () {
  return (
    <section class={style.container}>
      <Ghost
        size={160}
        mood="shocked"
        color={getColor ('primary2') (500)}
      />
      <h1 class={style.title}>
        {optimizeLineBreak ('This page does not exist. Just like me.')}
      </h1>
    </section>
  );
}
