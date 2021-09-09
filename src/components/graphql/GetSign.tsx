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
      videoUrl
    }
  }
`;

const GetSign = () => {
  const {
    uid,
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
    setLoading(loading);
    setError(error);

    if (data) {
      const {
        viewSign: {
          videoFile,
          title,
          pronounce,
          definition,
        } 
      } = data;
      const signData: any = {
        uid,
        videoFile,
        title,
        pronounce,
        definition,
      }
      setSignData(signData);
      setInputSignData(signData);
    }
  }, [loading, error, uid, setLoading, setError, setSignData, setInputSignData, data]);

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