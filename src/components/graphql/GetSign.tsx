import GetResource from './GetResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN_RESOURCE = resourceConstant.SIGN.resource;
const SIGN_QUERY = `
  query ViewSign(
    $uid: UUID!,
  ) {
    viewSign(
      uid: $uid,
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

const GetSign = () => {
  return (
    <GetResource
      query={SIGN_QUERY}
      resourceName={SIGN_RESOURCE}
    />
  );
}

export default GetSign;
