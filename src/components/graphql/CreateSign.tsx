import CreateResource from './CreateResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN = resourceConstant.SIGN;
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
      resourceFields={SIGN.fields}
      resourceName={SIGN.name}
      query={SIGN_CREATE_QUERY}
    />
  )
}

export default CreateSign;
