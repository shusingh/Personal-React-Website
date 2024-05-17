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
          <div className="bg-white dark:bg-gray-800 min-h-screen prose prose-lg mx-auto">
            <AppLayout />
          </div>
        </React.Suspense>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
