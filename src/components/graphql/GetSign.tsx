import GetResource from './GetResource';
import resourceConstant from '../../constants/resourceConstant';

const SIGN = resourceConstant.SIGN;
const SIGN_QUERY = `
  query ViewSign(
    $uid: UUID!,
  ) {
    viewSign(
      uid: $uid,
    ) {
      name
      pronounce
      definition
      state
      videoUrls
    }
  }
`;

const GetSign = () => {
  return (
    <GetResource
      query={SIGN_QUERY}
      resourceName={SIGN.name}
      resourceFields={SIGN.fields}
    />
  );
}

export default GetSign;
