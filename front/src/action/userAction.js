//login
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const loginSuccess =(user) => ({type: LOGIN_SUCCESS, payload: user})

export const LOGIN_ERROR = "LOGIN_ERROR"
const loginError = () => ({type: LOGIN_ERROR})

export const LOGIN_LOADING = "LOGIN_LOADING"
const loginLoading = () => ({type: LOGIN_LOADING})

//register 

