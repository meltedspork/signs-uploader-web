import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthorizedApolloProvider from './providers/AuthorizedApolloProvider';
import ApiContextProvider from './providers/ApiContextProvider';
import CustomAuth0Provider from './providers/CustomAuth0Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const apiBaseUrl: any = process.env.REACT_APP_API_BASE_URL;

function renderApp(configJson: {
  apiBaseUrl: string,
  data: {
    audience: string,
    clientId: string,
    domain: string,
    redirectUri: string,
  }
}) {
  const { apiBaseUrl, data } = configJson;

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <CustomAuth0Provider config={data}>
          <ApiContextProvider config={configJson}>
            <AuthorizedApolloProvider apiBaseUrl={apiBaseUrl}>
              <App />
            </AuthorizedApolloProvider>
          </ApiContextProvider>
        </CustomAuth0Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
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
    redirect_uri: redirectUri,
  } = data
  renderApp({
    apiBaseUrl,
    data: {
      audience,
      clientId,
      domain,
      redirectUri,
    },
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
