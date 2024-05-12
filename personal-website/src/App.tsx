import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/config';
import { AppRoutes } from './routes/config';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </React.Suspense>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
