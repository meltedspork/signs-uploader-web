import GetResources from './GetResources';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC = resourceConstant.TOPIC;
const TOPICS_QUERY = `
  query ViewTopics(
    $page: Int,
    $size: Int
  ) {
    viewTopics(
      page: $page,
      size: $size,
    ) {
      uid
      name
    }
  }
`;

const GetTopics = () => {
  return (
    <GetResources
      query={TOPICS_QUERY}
      resourceNames={TOPIC.resource}
    />
  );
};

export default GetTopics;