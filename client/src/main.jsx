import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider>
    store = {store}
  </Provider>
  <App/>
  </BrowserRouter>
);
