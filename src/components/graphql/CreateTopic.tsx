import CreateResource from './CreateResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC_RESOURCE = resourceConstant.TOPIC.resource;
const TOPIC_CREATE_QUERY: string = `
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
  return (
    <CreateResource
      history={history}
      resourceName={TOPIC_RESOURCE}
      query={TOPIC_CREATE_QUERY}
    />
  )
}

export default CreateTopic;
