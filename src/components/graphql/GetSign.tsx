import { useEffect, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const GET_SIGN = gql`
  query ViewSign(
    $uid: UUID!,
  ) {
    viewSign(
      uid: $uid,
    ) {
      name
      pronounce
      definition
      state
      videoUrls
    }
  }
`;

const GetSign = () => {
  const {
    uid,
    loaded,
    setLoaded,
    setLoading,
    setError,
    setData,
    setInputData,
    setReadOnly,
  } = useContext(ResourceContext);

  const { loading, error, data } = useQuery(GET_SIGN, {
    variables: { uid },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setError(error);
    setLoading(loading);

    if (loaded) return;
  
    if (data) {
      const {
        viewSign: {
          videoUrls,
          name,
          pronounce,
          definition,
        } 
      } = data;
      const signData: any = {
        videoUrls,
        name,
        pronounce,
        definition,
      }
      setData(signData);
      setInputData(signData);
      setLoaded(true);
    }
  }, [
    loaded, setLoaded,
    loading, error, uid, setLoading, setError, setData, setInputData, data]);

  const onClickEditSign = async (e: any) => {
    e.preventDefault();
    setReadOnly(false);
  }

  return (
    <Button variant="primary" type="button" onClick={onClickEditSign}>
      Edit
    </Button>
  );
}

export default GetSign;