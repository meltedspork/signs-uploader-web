import GetResource from './GetResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC = resourceConstant.TOPIC;
const TOPIC_QUERY = `
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
  return (
    <GetResource
      query={TOPIC_QUERY}
      resourceName={TOPIC.name}
      resourceFields={TOPIC.fields}
    />
  );
}

export default GetTopic;
