import { h, render } from 'preact';
import 'normalize.css';
import App from './components/app';
import './socket';

render (<App />, document.body);
