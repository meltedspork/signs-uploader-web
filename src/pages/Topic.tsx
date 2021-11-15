import ResourceProvider from '../providers/ResourceProvider';
import GetTopic from '../components/graphql/GetTopic';
import UpdateTopic from '../components/graphql/UpdateTopic';
import TopicForm from '../components/TopicForm';

const Topic = ({ match }: any) => {
  const {
    params: {
      uid: topicUid,
    }
  } = match;

  return (
    <ResourceProvider uid={topicUid}>
      {(context: any) => (
        <TopicForm>
          {context.readOnly ? <GetTopic /> : <UpdateTopic />}
        </TopicForm>
      )}
    </ResourceProvider>
  )
}

export default Topic;
