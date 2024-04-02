import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TagContextProvider } from './context/useTagContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TagContextProvider>
      <App />
    </TagContextProvider>
  </React.StrictMode>
);
