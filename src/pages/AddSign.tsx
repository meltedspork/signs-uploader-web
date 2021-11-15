import AddResource from './AddResource';
import CreateSign from '../components/graphql/CreateSign';
import SignForm from '../components/SignForm';

const AddSign = ({ history }: any) => {
  return (
    <AddResource>
      {() => (
        <SignForm>
          <CreateSign history={history} />
        </SignForm>
      )}
    </AddResource>
  )
}

export default AddSign;