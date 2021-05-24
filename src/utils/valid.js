const valid = ({ fullname, username, email, password, confirm_password }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please add your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name exceeds 25 characters.";
  }

  if (!username) {
    err.username = "Please add your user name.";
  } else if (username.replace(/ /g, "").length > 25) {
    err.username = "User name exceeds 25 characters.";
  }

  if (!email) {
    err.email = "Please add your email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!password) {
    err.password = "Please add your password.";
  } else if (password.length < 6) {
    err.password = "Password must be at least 6 characters.";
  }
  if (password !== confirm_password) {
    err.confirm_password = "Confirm password did not match.";
  }
  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

// Regex validation Email in stackoverflow
function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
