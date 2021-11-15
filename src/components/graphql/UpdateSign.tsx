import UpdateResource from './UpdateResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN = resourceConstant.SIGN;
const SIGN_UPDATE_QUERY: string = `
mutation UpdateSign(
  $uid: UUID!,
  $signInput: SignInput,
) {
  updateSign(
    uid: $uid,
    signInput: $signInput,
  ) {
    videoUrls
    name
    pronounce
    definition
  }
}
`;

const UpdateSign = () => {
  return (
    <UpdateResource
      resourceName={SIGN.name}
      resourceFields={SIGN.fields}
      query={SIGN_UPDATE_QUERY}
    />
  )
}

export default UpdateSign;
