import GetResources from './GetResources';
import resourceConstant from '../../constants/resourceConstant';

const SIGN_RESOURCES = resourceConstant.SIGN.resources;
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
      resourcesName={SIGN_RESOURCES}
    />
  );
};

export default GetSigns;
