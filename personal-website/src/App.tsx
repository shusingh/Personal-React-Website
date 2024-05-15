import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/config';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AppLayout />
        </React.Suspense>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
