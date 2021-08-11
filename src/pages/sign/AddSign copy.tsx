import { Component, Fragment } from 'react';
import SignForm from '../../components/SignForm';
import CreateSign from '../../graphql/CreateSign';

class AddSign extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      videoFile: null,
      title: '',
      pronounce: '',
      definition: '',
    }
  }

  _updateState = ({
    videoFile,
    title,
    pronounce,
    definition,
  }: {
    videoFile: any,
    title: string,
    pronounce: string,
    definition: string,
  }) => {
    console.log({
      videoFile,
      title,
      pronounce,
      definition,
    });
    this.setState({
      videoFile,
      title,
      pronounce,
      definition,
    });
  }

  render() {
    return (
      <Fragment>
        {/* <SignForm state={this.state} updateAddSignState={this._updateState}>
          <CreateSign state={this.state} updateAddSignState={this._updateState} />
        </SignForm> */}
      </Fragment>
    );
  }
};

export default AddSign;
