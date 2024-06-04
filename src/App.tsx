import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRoutes from './routes';
import './styles/App.css';

const App: React.FC = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;

