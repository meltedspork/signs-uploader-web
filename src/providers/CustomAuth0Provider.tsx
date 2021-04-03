import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const CustomAuth0Provider = (props: any) => {
  const {
    children,
    config: {
      audience,
      clientId,
      domain,
      redirectUri,
    },
  } = props;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}>
      {children}
    </Auth0Provider>
  );
}

export default CustomAuth0Provider;
