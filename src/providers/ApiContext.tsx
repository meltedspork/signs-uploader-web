import { createContext } from 'react';

const configData = {
  apiBaseUrl: '',
  data: {
    audience: '',
    clientId: '',
    domain: '',
  }
};

const ApiContext = createContext(configData);

export default ApiContext;