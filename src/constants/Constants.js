const BASE_URL = process.env.REACT_APP_API_URL

export const authConstant = {
  SIGN_UP: `${BASE_URL}/signup`,
  LOG_IN: `${BASE_URL}/auth/login`
}
