const User = require("./Schemadb");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome Sir !");
  } catch (error) {
    const status = 500;
    const respo = {
      status,
      error,
    };
    next(respo);
  }
};

module.exports = { home };
