import UpdateResource from './UpdateResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN_RESOURCE = resourceConstant.SIGN.resource;
const SIGN_UPDATE_QUERY: string = `
mutation UpdateSign(
  $uid: UUID!,
  $signInput: SignInput,
) {
  updateSign(
    uid: $uid,
    signInput: $signInput,
  ) {
    definition
    name
    pronounce
    topics {
      uid
    }
    videoUrls
  }
}
`;

const UpdateSign = () => {
  return (
    <UpdateResource
      resourceName={SIGN_RESOURCE}
      query={SIGN_UPDATE_QUERY}
    />
  )
}

export default UpdateSign;
