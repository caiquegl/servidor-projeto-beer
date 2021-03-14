const Sequelize = require('sequelize');
const { newsletters } = require("../models");
const Op = Sequelize.Op

const moment = require('moment');
moment.locale('pt-br');

const data = moment().format('L');



const newsController = {

  create: async (req, res) => {
    const {email} = req.body;

    
    await newsletters.create({
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.send("criado");  
  }

};

module.exports = newsController;
