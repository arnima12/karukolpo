import { BrowserRouter } from 'react-router';
import './App.css';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
