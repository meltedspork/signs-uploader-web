import React from 'react';

const configData = {
  apiBaseUrl: '',
  data: {
    audience: '',
    clientId: '',
    domain: '',
  }
};

export const ApiContext = React.createContext(configData);
