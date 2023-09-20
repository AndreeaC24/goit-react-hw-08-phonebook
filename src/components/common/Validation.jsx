// validarea nume
export const validateName = name => {
  return name.length >= 3 ? '' : 'Name must be at least 3 characters long.';
};

// validarea email-ului
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
};

// validarea parolei
export const validatePassword = password => {
  return password.length >= 7
    ? '' : 'Password must be at least 7 characters long.';
};
