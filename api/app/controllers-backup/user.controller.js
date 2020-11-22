const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log('entrei');
  res.status(201).send('Requisição recebida com sucesso!');
};

exports.get = (req, res) => {
  console.log('here');
  return true;
};