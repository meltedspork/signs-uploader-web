import { useHistory } from 'react-router-dom';
import GetSign from '../../graphql/GetSign';
import SignForm from '../../components/SignForm';
import Button from 'react-bootstrap/Button';

const EditSign = (props: any) => {
  const { uid } = props.match.params;
  const history = useHistory();

  const onClickEditSign = async (e: any) => {
    e.preventDefault();
    history.push(`/edit-sign/${uid}`);
  }

  return (
    <GetSign uid={uid}>
      <SignForm>
        <Button variant="primary" type="button" onClick={onClickEditSign}>
          Edit
        </Button>
      </SignForm>
    </GetSign>
  )
}

export default EditSign;