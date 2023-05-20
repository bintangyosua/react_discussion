// validation.tsx

export const isEmpty = (value: string) => {
  return value.trim() === "";
};

export const isMatchingPassword = (
  password: string,
  confirmPassword: string
) => {
  return password === confirmPassword;
};
