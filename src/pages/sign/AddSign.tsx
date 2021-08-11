import { Fragment } from 'react';
import CreateSign from '../../graphql/CreateSign';
import SignForm from '../../components/SignForm';
import Button from 'react-bootstrap/Button';

const AddSign = (props: any) => {

  const onClickCreateSign = async (e: any) => {
    e.preventDefault();
    window.alert('onClickEditSign!!!');
  }

  return (
    <Fragment>
      <CreateSign>
        <SignForm>
          <Button variant="primary" type="button" onClick={onClickCreateSign}>
            Submit
          </Button>
        </SignForm>
      </CreateSign>
    </Fragment>
  )
}

export default AddSign;
