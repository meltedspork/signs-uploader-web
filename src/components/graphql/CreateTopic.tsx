import CreateResource from './CreateResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC = resourceConstant.TOPIC;
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
      resourceFields={TOPIC.fields}
      resourceName={TOPIC.name}
      query={TOPIC_CREATE_QUERY}
    />
  )
}

export default CreateTopic;
