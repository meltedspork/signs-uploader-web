import React, { Component, Fragment } from 'react';
import SignForm from '../../components/SignForm';
// import FileUploadInput from '../../components/FileUploadInput';
import CreateSign from '../../graphql/CreateSign';

class AddSign extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      title: null,
      pronounce: null,
      definition: null,
    }
  }

  render() {
    return (
      <Fragment>
        {/* <FileUploadInput /> */}
        <SignForm />
        <CreateSign newData={this.state} />
      </Fragment>
    );
  }
};

export default AddSign;
