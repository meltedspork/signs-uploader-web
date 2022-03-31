import { Fragment } from 'react';
import GetResource from './GetResource';
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
const SIGN_NEW_QUERY = `
  query viewSign {
    viewSign {
      topics {
        uid
        name
      }
    }
  }
`;

const CreateSign = ({ history }: any) => {
  return (
    <Fragment>
      <GetResource
        query={SIGN_NEW_QUERY}
        resourceName={SIGN_RESOURCE}
      />
      <CreateResource
        history={history}
        resourceName={SIGN_RESOURCE}
        query={SIGN_CREATE_QUERY}
      />
    </Fragment>
  )
}

export default CreateSign;
