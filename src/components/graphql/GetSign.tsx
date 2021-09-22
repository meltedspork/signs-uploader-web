import { useEffect, useContext } from 'react';
import SignContext from '../../contexts/SignContext';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const GET_SIGN = gql`
  query ViewSign (
    $uid: UUID!,
  ) {
    viewSign(
      uid: $uid,
    ) {
      title
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
    setSignData,
    setInputSignData,
    setReadOnly,
  } = useContext(SignContext);

  const { loading, error, data } = useQuery(GET_SIGN, {
    variables: { uid },
  });

  useEffect(() => {
    setError(error);
    setLoading(loading);

    if (loaded) return;
  
    if (data) {
      const {
        viewSign: {
          videoUrls,
          title,
          pronounce,
          definition,
        } 
      } = data;
      const signData: any = {
        videoUrls,
        title,
        pronounce,
        definition,
      }
      setSignData(signData);
      setInputSignData(signData);
      setLoaded(true);
    }
  }, [loaded, setLoaded, loading, error, uid, setLoading, setError, setSignData, setInputSignData, data]);

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