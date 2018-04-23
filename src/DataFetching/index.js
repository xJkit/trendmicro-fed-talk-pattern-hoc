import React from 'react';
import { 
  compose, 
  withReducer, 
  withProps, 
  withHandlers,
  branch,
  renderComponent,
  lifecycle
} from 'recompose';
import * as api from './api';

/** Components */
import Logged from './Logged';
import PageLoader from '../components/PageLoader';
import InlineErrorMessage from '../components/InlineErrorMessage';
import Loader from '../components/Loader';
import { Button } from '../components/Buttons';

import authReducer, { 
  initialState,
  actionTypes
} from './authReducer';

const Logout = ({ auth, handleLoginSubmit }) => (
  <div>
    <h4>Please Log In </h4>
    <form onSubmit={handleLoginSubmit}>
      <div style={{ width: '60%', marginBottom: 36 }}>
        <h5>Account</h5>
        <input 
          type="text"
          name="account"
          className="form-control" 
        />
        <h5>Password</h5>
        <input 
          type="password"
          name="password"
          className="form-control" 
        />
      </div>
      <Button 
        btnStyle="primary"
        type="submit"
        disabled={auth.isLogging}
      >
        <LoadingButton
          isLogging={auth.isLogging}
        />
      </Button>
      {auth.error &&
        <InlineErrorMessage message={auth.error} />
      }
    </form>
  </div>
);

export default compose(
  withReducer(
    'auth', 
    'dispatch', 
    authReducer, 
    initialState
  ),
  withHandlers({
    handleLoginSubmit: ({ dispatch }) => (evt) => {
      evt.persist();
      evt.preventDefault();
      const account = evt.target.account.value;
      const password = evt.target.password.value;
      login({ account, password }, dispatch);
    }
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      fetchUser({
        account: 'jay@trend.com.tw',
        password: 'guest'
      }, dispatch);
    }
  }),
  branch(
    ({ auth }) => auth.isFetching,
    renderComponent(PageLoader)
  ),
  branch(
    ({ auth }) => !!auth.id,
    renderComponent(({ auth }) => <Logged user={auth.id} />)
  )
)(Logout);

/** 
 * 
 * helpers
 * 
 **/

const fetchUser = (credentials, dispatch) => {
  /** authentication process */
  /** in redux app, the following processes are better implemented in middlewares */
  dispatch({ type: actionTypes.FETCH_USER_REQUEST });
  api.authUser(credentials)
    .then(resp => {
      dispatch({
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: resp
      })
    })
    .catch(error => {
      dispatch({
        type: actionTypes.FETCH_USER_FAILURE,
      })
    })
 }

const login = (credentials, dispatch) => {
  /** authentication process */
  /** in redux app, the following processes are better implemented in middlewares */
  dispatch({ type: actionTypes.LOGIN_REQUEST });
  api.authUser(credentials)
    .then(resp => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: resp
      })
    })
    .catch(error => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: 'Incorrect account or password'
      })
    })
}

const LoadingButton = branch(
  ({ isLogging }) => isLogging,
  renderComponent(
    () => 
      <span>
        <Loader size="sm" /> Submitting
      </span>
  )
)(
  () => 'Submit'
)
