const BASE_URL = process.env.REACT_APP_API_URL

export const authConstants = {
  SIGN_UP: `${BASE_URL}/signup`,
  LOG_IN: `${BASE_URL}/auth/login`
}

export const eventsConstant = {
  CREATE_EVENT: `${BASE_URL}/events`,
  VIEW_ALL_EVENTS: `${BASE_URL}/events`
}

export const viewEventConstant = id => ({VIEW_EVENT: `${BASE_URL}/events/${id}`})