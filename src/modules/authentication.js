export const types={
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  // AUTHENTICATE_USER:'authentication/AUTHENTICATE_USER',
  // AUTHENTICATTION_SUCCEEDED:'authentication/AUTHENTICATTION_SUCCEEDED'
}

const initialState = {
  isLoggedIn:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    {
      return {
        ...state,
        isLoggedIn:true
      }
    }
    case types.LOGIN_FAILURE:
    {
      return {
        ...state,
        isLoggedIn:false
      }
    }
    default:
      return state
  }
}

export const actions={
  login:(user,password)=>({type:types.LOGIN_REQUEST,payload:{user:user,password:password}})
}
