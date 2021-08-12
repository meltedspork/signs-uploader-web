import { Fragment } from 'react';
import SignContext from '../contexts/SignContext';

const SignProvider = ({ children, values }: any) => {
  return (
    <SignContext.Provider value={values}>
      <SignContext.Consumer>
        {(_context) => (
          <Fragment>
            {children}
          </Fragment>
        )}
      </SignContext.Consumer>
    </SignContext.Provider>
  );
}

export default SignProvider;