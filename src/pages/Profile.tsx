import { useContext, useEffect, useState } from 'react';
import ApiContext from '../contexts/ApiContext';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const config = useContext(ApiContext);
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [currentStatus, setCurrentStatus] = useState({});
  useEffect(() => {
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
  
        const userDetailsByIdUrl = `${apiBaseUrl}/status`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const data = await metadataResponse.json();

        setCurrentStatus(data);
      } catch (e) {
        console.log(e);
      }
    };
  
    getUserMetadata(user);
  }, [getAccessTokenSilently, config]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && user ? (
      <div>
        <h3>Profile Data</h3>
        <img src={user.picture} alt={user.name} />
        {user ? (
          <pre>{JSON.stringify(user, null, 2)}</pre>
        ) : (
          'No User Profile'
        )}
        <h3>Current Status</h3>
        {currentStatus ? (
          <pre>{JSON.stringify(currentStatus, null, 2)}</pre>
        ) : (
          'No Status'
        )}
      </div>
    ) : <Redirect to={{ pathname: '/' }} />
  );
};

export default Profile;