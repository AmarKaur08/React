import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Card from './Card';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="format">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  </StrictMode>
);
