import React from 'react';

const configData = {
  apiBaseUrl: '',
  data: {
    audience: '',
    clientId: '',
    domain: '',
  }
};

const ApiContext = React.createContext(configData);

export default ApiContext;