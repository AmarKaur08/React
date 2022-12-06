import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CardList from './CardList';
import App from './App';
import './index.css';
import {robots} from './Robots';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div >
      <App/>    
    </div>
  </StrictMode>
);
