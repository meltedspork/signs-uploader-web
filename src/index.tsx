import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from '@auth0/auth0-react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApiContext } from './ApiContext';

const history = createBrowserHistory();

const apiBaseUrl: any = process.env.REACT_APP_API_BASE_URL;

function renderApp(configJson: {
  apiBaseUrl: string,
  data: {
    domain: string,
    clientId: string,
    audience: string,
  }
}) {
  const { audience, clientId, domain } = configJson.data;

  ReactDOM.render(
    <React.StrictMode>
      <Router history={history}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
          audience={audience}>
          <ApiContext.Provider value={configJson}>
            <App />
          </ApiContext.Provider>
        </Auth0Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

fetch(`${apiBaseUrl}/config.json`, {
  credentials: 'include',
}).then(response => response.json()).then((data) => {
  console.log('data', data);
  const {
    audience,
    client_id: clientId,
    domain,
  } = data
  renderApp({
    apiBaseUrl,
    data: {
      audience,
      clientId,
      domain,
    },
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
