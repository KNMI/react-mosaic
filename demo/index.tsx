import React from 'react';
import { createRoot } from 'react-dom/client';
import { ExampleApp } from './ExampleApp';

const APP_ELEMENT = document.getElementById('app');
if (APP_ELEMENT) {
  createRoot(APP_ELEMENT).render(<ExampleApp />);
}
