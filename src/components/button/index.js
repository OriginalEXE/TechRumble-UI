import { h } from 'preact';
import classNames from 'classnames';
import * as style from './style';

export default function Button ({
  tag,
  href,
  color,
  children,
  type,
  target,
  rel,
}) {
  if (tag === 'a') {
    return (
      <a
        class={classNames (
          style.button,
          color ? style[`button${color}`] : null,
        )}
        href={href}
        color={color}
        target={target}
        rel={rel}
      >{children}</a>
    );
  }

  return (
    <button
      class={classNames (
        style.button,
        color ? style[`button${color}`] : null,
      )}
      type={type}
    >{children}</button>
  );
}
