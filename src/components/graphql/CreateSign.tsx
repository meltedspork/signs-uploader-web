import CreateResource from './CreateResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN_RESOURCE = resourceConstant.SIGN.resource;
const SIGN_CREATE_QUERY: string = `
mutation CreateSign(
  $signInput: SignInput,
) {
  createSign(
    signInput: $signInput,
  ) {
    uid
    videoUrls
    name
    pronounce
    definition
  }
}
`;

const CreateSign = ({ history }: any) => {
  return (
    <CreateResource
      history={history}
      resourceName={SIGN_RESOURCE}
      query={SIGN_CREATE_QUERY}
    />
  )
}

export default CreateSign;
