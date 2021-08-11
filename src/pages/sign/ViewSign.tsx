import { Fragment } from 'react';
import GetSign from '../../graphql/GetSign';
import SignForm from '../../components/SignForm';
import Button from 'react-bootstrap/Button';

const ViewSign = (props: any) => {
  const { uid } = props.match.params;

  const onClickEditSign = async (e: any) => {
    e.preventDefault();
    window.alert('onClickEditSign!!!');
  }

  return (
    <Fragment>
      <GetSign uid={uid}>
        <SignForm>
          <Button variant="primary" type="button" onClick={onClickEditSign}>
            Edit
          </Button>
        </SignForm>
      </GetSign>
    </Fragment>
  )
}

export default ViewSign;