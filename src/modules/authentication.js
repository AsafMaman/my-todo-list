export const INCREMENT = 'authentication/AUTHENTICATE_USER'

const initialState = {
  isLoggedIn:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATTION_SUCCEEDED':
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state
  }
}

export const authenticateUser = (user,password) => {
  return dispatch => {
    dispatch({
      type: 'AUTHENTICATE_USER',
      payload:{user:user,password:password}
    })
  }
}