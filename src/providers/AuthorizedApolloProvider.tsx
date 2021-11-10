import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
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

  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      const context = operation.getContext();
      const {
        response: {
          headers,
        },
      } = context;

      if (response.data) {
        const page = headers.get('X-Pagination-Page');
        const size = headers.get('X-Pagination-Size');
        const total = headers.get('X-Pagination-Total');

        const pagination = {
          page: Number(page),
          size: Number(size),
          total: Number(total),
        };

        Object.assign(response.data, { pagination });
      }
  
      return response;
    })
  })

  const authLink = setContext(async (_request, _context) => {
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
    link: ApolloLink.from([
      authLink, afterwareLink, httpLink,
    ]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
}

export default AuthorizedApolloProvider;
