// auth.js

export const getToken = async () => {
  const token = localStorage.getItem("sessionId");
  return token;
};

export const isAuthenticated = async () => {
  const token = getToken();
  return !!token;
};
