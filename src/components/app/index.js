import { h } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import * as style from './style';
import Redirect from '../redirect';

const loadStatsComponent = () => import ('../../routes/stats').then (
  module => module.default,
);

export default function App () {
  return (
    <div class={style.app}>
      <Router>
        <AsyncRoute
          path="category/:categorySlug/stats"
          getComponent={loadStatsComponent}
        />
        <Redirect
          path="category/:categorySlug"
          to="category/javascript-frameworks/stats"
        />
        <Redirect
          path="category"
          to="category/javascript-frameworks/stats"
        />
        <Redirect
          path="/"
          to="category/javascript-frameworks/stats"
        />
      </Router>
    </div>
  );
}
