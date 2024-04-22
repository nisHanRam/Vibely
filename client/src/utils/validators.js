export const checkUsernameValidity = (username) => {
  const usernamePattern = /^[a-zA-Z0-9]{8,}$/;
  return usernamePattern.test(username);
};

export const checkPasswordValidity = (password) => {
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()_\-+={}|:;”‘<,>.?/]).{8,}$/;
  return passwordPattern.test(password);
};
