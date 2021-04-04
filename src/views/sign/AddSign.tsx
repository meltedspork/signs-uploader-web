import { Component, Fragment } from 'react';
import SignForm from '../../components/SignForm';
// import FileUploadInput from '../../components/FileUploadInput';
import CreateSign from '../../graphql/CreateSign';

class AddSign extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      pronounce: '',
      definition: '',
    }
  }

  _updateState = ({
    title,
    pronounce,
    definition,
  }: {
    title: string,
    pronounce: string,
    definition: string,
  }) => {
    console.log({
      title,
      pronounce,
      definition,
    });
    this.setState({
      title,
      pronounce,
      definition,
    });
  }

  render() {
    return (
      <Fragment>
        {/* <FileUploadInput /> */}
        <SignForm state={this.state} updateAddSignState={this._updateState}>
          <CreateSign state={this.state} updateAddSignState={this._updateState} />
        </SignForm>
      </Fragment>
    );
  }
};

export default AddSign;
