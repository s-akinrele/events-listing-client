export const isLoggedIn = () => localStorage.getItem('auth_token') !== null

export const token = () => localStorage.getItem('auth_token');
