import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';

const AuthorizedApolloProvider = (props: any) => {
  const {
    children,
    apiBaseUrl,
  } = props;

  const { getAccessTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri: `${apiBaseUrl}/graphql`,
  });

  const authLink = setContext(async () => {
    const accessToken = await getAccessTokenSilently();

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
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