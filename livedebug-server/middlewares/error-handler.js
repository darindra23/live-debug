module.exports = function(err, req, res, next) {
  const stringifiedErr = JSON.stringify(err);
  if (err.code === 404) {
    res.status(err.code).json({
      message: err.resource + " not found"
    });
  } else if (stringifiedErr.indexOf("SequelizeValidationError") !== -1) {
    const validateErrors = err.errors;
    const errors = [];

    for (let key in validateErrors) {
      errors.push(validateErrors[key].message);
    }

    res.status(400).json({ errors });
  } else if (stringifiedErr.indexOf("SequelizeUniqueConstraintError") !== -1) {
    let errors = null;
    if (stringifiedErr.indexOf("phone_number must be unique") !== -1) {
      errors = ["Phone Number is already in use"];
    } else {
      errors = ["Email is already in use"];
    }

    res.status(400).json({ errors });
  } else {
    res.status(500).json({
      message: "Internal server error, check the console"
    });
  }
};
