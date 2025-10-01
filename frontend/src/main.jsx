import ReactDOM from 'react-dom/client';

import ThemeProvider from '@/components/ThemeProvider';

import Router from './Router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>,
);
