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
    sign {
      name
      pronounce
      definition
      state
      topics {
        uid
        name
      }
      videos {
        uid
        title
        src
      }
    }
    topics {
      uid
      name
    }
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
