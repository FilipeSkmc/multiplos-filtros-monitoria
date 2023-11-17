import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import RickProvider from './context/RickProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <RickProvider>
    <App />
  </RickProvider>,
);
