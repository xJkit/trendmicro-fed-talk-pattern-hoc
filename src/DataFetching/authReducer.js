
export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
};

export const initialState = {
  isFetching: true,
  isLogging: false,
  id: '',
  error: '',
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        isLogging: true,
        id: '',
        error: ''
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        id: action.payload,
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        error: action.payload
      }
    case actionTypes.FETCH_USER_REQUEST:
      return {
        ...initialState,
        isFetching: true,
      }
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        id: action.payload
      }
    case actionTypes.FETCH_USER_FAILURE:
      return {
        isFetching: false,
      }
    default:
      return state;
  }
}
