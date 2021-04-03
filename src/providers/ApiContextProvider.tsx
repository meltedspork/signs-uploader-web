import React from 'react';
import ApiContext from './ApiContext';

const ApiContextProvider = (props: any) => {
  const {
    children,
    config,
  } = props;

  return (
    <ApiContext.Provider value={config}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
