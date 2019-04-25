import { h } from 'preact';
import * as style from './style';
import Button from '../button';
import optimizeLineBreak from '../../utils/optimize-line-break';

export default function TechCard ({
  name,
  icon,
  description,
  mentions,
  website,
}) {
  const mentionsValue = (
    <span class={style.mentionsValue}>{mentions}</span>
  );

  return (
    <article class={style.card}>
      <header class={style.header}>
        <h2 class={style.name}>
          {name}
        </h2>
      </header>
      <div
        class={style.icon}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <div class={style.body}>
        <p class={style.description}>
          {optimizeLineBreak (description)}
        </p>
        <p class={style.mentions}>
          {mentionsValue} {mentions === 1 ? 'mention' : 'mentions'} on Twitter today
        </p>
        <div class={style.actions}>
          <Button
            tag="a"
            href={website}
            target="_blank"
            rel="noopener nofollow"
          >Website</Button>
          {/* <Button
            tag="a"
            href="https://duckduckgo.com"
            color="Primary"
          >Learn {name}</Button> */}
        </div>
      </div>
    </article>
  );
}
