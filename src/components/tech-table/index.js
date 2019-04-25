import { h } from 'preact';
import classNames from 'classnames';
import * as style from './style';

export default function TechTable ({
  children,
  initialDataLoaded,
}) {
  return (
    <div class={classNames (
      style.table,
      initialDataLoaded ? null : style.loading,
    )}>
      {children}
    </div>
  );
}
