import './App.css';
import AppLayout from './layout/AppLayout';
import { ThemeProvider } from './context/ThemeContext';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="bg-white dark:bg-gray-700 min-h-screen prose prose-lg mx-auto">
          <AppLayout />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
