import { h } from 'preact';
import * as style from './style';
import Container from '../../components/container';

export default function ViewPage ({ children }) {
  return (
    <div>
      <main class={style.content}>
        {children}
      </main>
      <footer class={style.footer}>
        <Container maxWidth={500}>
          <p>Brought to you by TechRumble</p>
        </Container>
      </footer>
    </div>
  );
}
