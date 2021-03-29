import React from 'react';

const configData = {
  apiBaseUrl: '',
  data: {
    audience: '',
    client_id: '',
    domain: '',
  }
};

export const ApiContext = React.createContext(configData);

