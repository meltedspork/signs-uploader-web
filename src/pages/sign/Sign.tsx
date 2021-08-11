import { Component, Fragment } from 'react';
// import { SignProvider } from '../../providers/SignProvider';
// import SignForm from '../../components/SignForm';

class Sign extends Component {
  constructor(props: any) {
    super(props);
    // const {
    //   match: {
    //     params: {
    //       uid = null,
    //     } = {},
    //   } = {},
    // } = props;
    this.state = {
      uid: '',
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
    console.log('_updateState:', {
      videoFile,
      title,
      pronounce,
      definition,
    });
    // this.setState({
    //   videoFile,
    //   title,
    //   pronounce,
    //   definition,
    // });
  }

  render() {
    // console.log('first props', this.props);
    // const { children } = this.props;

    return (
      <Fragment />
      // <SignProvider>
      //   <SignForm />
      //   {children}
      // </SignProvider>
    );
  }
};

export default Sign;