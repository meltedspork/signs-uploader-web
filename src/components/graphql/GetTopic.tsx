import { useEffect, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const GET_TOPIC = gql`
  query ViewTopic(
    $uid: UUID!,
  ) {
    viewTopic(
      uid: $uid,
    ) {
      name
    }
  }
`;

const GetTopic = () => {
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

  const { loading, error, data } = useQuery(GET_TOPIC, {
    variables: { uid },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setError(error);
    setLoading(loading);

    if (loaded) return;
  
    if (data) {
      const {
        viewTopic: {
          name,
        } 
      } = data;
      const topicData: any = {
        name,
      }
      setData(topicData);
      setInputData(topicData);
      setLoaded(true);
    }
  }, [
    loaded, setLoaded,
    loading, error, uid, setLoading, setError, setData, setInputData, data]);

  const onClickEditTopic = async (e: any) => {
    e.preventDefault();
    setReadOnly(false);
  }

  return (
    <Button variant="primary" type="button" onClick={onClickEditTopic}>
      Edit
    </Button>
  );
}

export default GetTopic;