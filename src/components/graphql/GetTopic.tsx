import GetResource from './GetResource';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC_NAME = resourceConstant.TOPIC.resource;
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
      resourceName={TOPIC_NAME}
    />
  );
}

export default GetTopic;
