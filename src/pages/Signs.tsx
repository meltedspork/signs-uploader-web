import Resources from './Resources';
import GetSigns from '../components/graphql/GetSigns';
import resourceConstant from '../constants/resourceConstant';

const SIGN_KEY = resourceConstant.SIGN.key;

const Signs = ({ history, match }: any) => {
  return (
    <Resources
      resourceKey={SIGN_KEY}
      history={history}
      match={match}
    >
      <GetSigns />
    </Resources>
  );
}

export default Signs;
