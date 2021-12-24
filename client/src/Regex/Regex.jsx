const regex = {
  email: /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

export const validateEmail = new RegExp(regex.email);

export const validatePassword = new RegExp(regex.password);
