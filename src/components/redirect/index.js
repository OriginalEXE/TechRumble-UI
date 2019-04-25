import { route } from 'preact-router';

export default function Redirect ({ to }) {
  route (to, true);
  return null;
}
