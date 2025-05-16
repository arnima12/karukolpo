import { BrowserRouter } from 'react-router';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './CartProvider/CartProvider';
function App() {
  return (
    <CartProvider>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
