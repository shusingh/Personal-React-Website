import './App.css';
import AppLayout from './layout/AppLayout';
import { ThemeProvider } from './context/ThemeContext';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="bg-white dark:bg-gray-800 min-h-screen mx-auto max-w-3xl prose prose-base">
          <AppLayout />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
