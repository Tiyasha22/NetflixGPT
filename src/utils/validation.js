export const checkValidData = (email, password) => {
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";
  return null;
};
