import { Fragment, useContext, useEffect } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const CREATE_TOPIC = gql`
mutation CreateTopic(
  $topicInput: TopicInput,
) {
  createTopic(
    topicInput: $topicInput,
  ) {
    uid
    name
  }
}
`;

const CreateTopic = ({ history }: any) => {
  const {
    setUid,
    setLoading,
    setError,
    setData,
    inputData,
    setInputData,
    setReadOnly,
    setReset,
  } = useContext(ResourceContext);

  const [createNewTopic] = useMutation(CREATE_TOPIC);

  useEffect(() => {
    setLoading(false);
    setError(false);
    setReadOnly(false);
  });

  const onClickCreateTopic = async (e: any) => {
    e.preventDefault();
    const {
      name,
    }: any = inputData;
    const { data } = await createNewTopic({
      variables: {
        topicInput: {
          name,
        }
      },
    });
    const { createTopic } = data;
    const { uid } = createTopic;
    const createdTopic = {
      topic: createTopic.topic,
    }
    setUid(uid);
    setData(createdTopic);
    setInputData(createdTopic);
    history.replace({ pathname: `/topic/${uid}` });
  }

  const onClickClearTopic = async (e: any) => {
    e.preventDefault();
    if (setReset) setReset(true);
  }

  return (
    <Fragment>
      <Button variant="primary" type="button" onClick={onClickCreateTopic}>
        Submit
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickClearTopic}>
        Clear
      </Button>
    </Fragment>
  )
}

export default CreateTopic;
