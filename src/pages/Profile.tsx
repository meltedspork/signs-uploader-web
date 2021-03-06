import { useContext, useEffect, useState } from 'react';
import ApiContext from '../contexts/ApiContext';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const config = useContext(ApiContext);
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(user);
  console.log('user', user)
  useEffect(() => {
    console.log('user2222', user)
    // console.log('this.context', this.context);
    const getUserMetadata = async (user: any) => {
      const {
        apiBaseUrl,
        data: {
          audience
        }
      } = config;

      try {
        const accessToken = await getAccessTokenSilently({
          audience,
          scope: "read:signs",
        });

        console.log('accessToken', accessToken)
        console.log('user-------->', user)
  
        const userDetailsByIdUrl = `${apiBaseUrl}/test_jwt`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('metadataResponse -------->', metadataResponse)
  
       const { user_metadata } = await metadataResponse.json();
  
       setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata(user);
  }, [getAccessTokenSilently, config, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    ) : <Redirect to={{ pathname: '/' }} />
  );
};

export default Profile;