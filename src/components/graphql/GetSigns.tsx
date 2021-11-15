import GetResources from './GetResources';
import resourceConstant from '../../constants/resourceConstant';

const SIGN = resourceConstant.SIGN;
const SIGNS_QUERY = `
  query ViewSigns(
    $page: Int,
    $size: Int
  ) {
    viewSigns(
      page: $page,
      size: $size,
    ) {
      uid
      name
    }
  }
`;

const GetSigns = () => {
  return (
    <GetResources
      query={SIGNS_QUERY}
      resourceNames={SIGN.resource}
    />
  );
};

export default GetSigns;
