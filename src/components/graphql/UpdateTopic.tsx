import { Fragment, useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const UPDATE_TOPIC = gql`
mutation UpdateTopic(
  $uid: UUID!,
  $topicInput: TopicInput,
) {
  updateTopic(
    uid: $uid,
    topicInput: $topicInput,
  ) {
    name
  }
}
`;

const UpdateTopic = () => {
  const {
    uid,
    data,
    setData,
    inputData,
    setInputData,
    setReadOnly,
  } = useContext(ResourceContext);

  const [updateTopic] = useMutation(UPDATE_TOPIC);

  const onClickCancelTopic = async (e: any) => {
    e.preventDefault();
    setData(data);
    setReadOnly(true);
  }

  const onClickUpdateTopic = async (e: any) => {
    e.preventDefault();
    const {
      name,
    }: any = inputData;
    const { data } = await updateTopic({
      variables: {
        uid,
        topicInput: {
          name,
        }
      },
    });
    const { updateTopic: updatedTopic } = data;
    const updatedTopicData: any = {
      name: updatedTopic.name,
    }

    setInputData(updatedTopicData);
    setData(updatedTopicData);
    setReadOnly(true);
  }

  return (
    <Fragment>
      <Button variant="secondary" type="button" onClick={onClickUpdateTopic}>
        Update
      </Button>{' '}
      <Button variant="danger" type="button" onClick={onClickCancelTopic}>
        Cancel
      </Button>
    </Fragment>
  );
}

export default UpdateTopic;