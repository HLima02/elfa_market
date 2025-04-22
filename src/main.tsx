import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import ProductProvider from './contexts/produtos.tsx'

createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <App />
    <ToastContainer/>
  </ProductProvider>,
)
