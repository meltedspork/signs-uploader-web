import GetResources from './GetResources';
import resourceConstant from '../../constants/resourceConstant';

const TOPIC_RESOURCES = resourceConstant.TOPIC.resources;
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
      resourcesName={TOPIC_RESOURCES}
    />
  );
};

export default GetTopics;