import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

const AuthorizedApolloProvider = (props: any) => {
  const {
    children,
    apiBaseUrl,
  } = props;

  const { getAccessTokenSilently } = useAuth0();

  const httpLink = createUploadLink({
    uri: `${apiBaseUrl}/graphql`,
    credentials: 'include',
  });

  const authLink = setContext(async (request, previousContext) => {
    const accessToken = await getAccessTokenSilently();

    return {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        credentials: 'include',
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
}

export default AuthorizedApolloProvider;