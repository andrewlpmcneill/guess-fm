/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const user = db.User;

const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const myUser = await user.findAll({
      raw: true,
      where: {
        id
      },
    });
    res.json(myUser);
  } catch (err) {
    console.log(err);
  }
};

// TO BE COMPLETED - CREATING NEW USER
const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = await user.Create({
      first_name,
      last_name,
      email,
      password,
    });
    res.json(newUser);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUser, createUser };
