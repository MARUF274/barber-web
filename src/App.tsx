import { createSignal, type Component, onMount, onCleanup, createEffect } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Root from './routes/routing';
// import '../src/shared/kei-dark-light.css'
import store from './store/store';

const App: Component = () => {

  const [rect, setRect] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const handler = (event: Event) => {
    setRect({ height: window.innerHeight, width: window.innerWidth });
  };

  onCleanup(() => {
    window.removeEventListener('resize', handler);
  })

  onMount(() => {
    window.addEventListener('resize', handler);
    if (rect().width <= 768) {
      store.setIsMobile(true);
    } else {
      store.setIsMobile(false);
    }
  })

  createEffect(() => {
    // console.log("isi",store.isMobile())
})

  return (<>
  <Root></Root>

  </>
  );
};

export default App;
