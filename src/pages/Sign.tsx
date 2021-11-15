import ResourceProvider from '../providers/ResourceProvider';
import GetSign from '../components/graphql/GetSign';
import UpdateSign from '../components/graphql/UpdateSign';
import SignForm from '../components/SignForm';

const Sign = ({ match }: any) => {
  const {
    params: {
      uid: signUid,
    }
  } = match;

  return (
    <ResourceProvider uid={signUid}>
      {(context: any) => (
        <SignForm>
          {context.readOnly ? <GetSign /> : <UpdateSign />}
        </SignForm>
      )}
    </ResourceProvider>
  )
}

export default Sign;
