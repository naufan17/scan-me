import './bootstrap';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Main from './components/layout/Main';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <Main>
        <App {...props} />
      </Main>
    );
  },
})