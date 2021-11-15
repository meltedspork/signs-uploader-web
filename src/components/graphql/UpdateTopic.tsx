import UpdateResource from './UpdateResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC = resourceConstant.TOPIC;
const TOPIC_UPDATE_QUERY: string = `
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
  return (
    <UpdateResource
      resourceName={TOPIC.name}
      resourceFields={TOPIC.fields}
      query={TOPIC_UPDATE_QUERY}
    />
  )
}

export default UpdateTopic;
