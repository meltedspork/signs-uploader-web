import Resources from './Resources';
import GetTopics from '../components/graphql/GetTopics';
import resourceConstant from '../constants/resourceConstant';

const TOPIC_KEY = resourceConstant.TOPIC.key;

const Topics = ({ history, match }: any) => {
  return (
    <Resources
      resourceKey={TOPIC_KEY}
      history={history}
      match={match}
    >
      <GetTopics />
    </Resources>
  );
}

export default Topics;
