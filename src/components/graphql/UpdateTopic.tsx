import UpdateResource from './UpdateResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC_RESOURCE = resourceConstant.TOPIC.resource;
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
      resourceName={TOPIC_RESOURCE}
      query={TOPIC_UPDATE_QUERY}
    />
  )
}

export default UpdateTopic;
