import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app';
import { ErrorBoundary } from './components/error-boundary';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </Provider>
  </StrictMode>,
);
