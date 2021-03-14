const Sequelize = require('sequelize');
const { Cerveja } = require("../models");
const Op = Sequelize.Op

const moment = require('moment');
moment.locale('pt-br');

const data = moment().format('L');



const searchController = {

  search: async (req, res) => {
    const {nome} = req.body;

    var query = `%${nome}%`;
    
    let validando = await Cerveja.findAll({
      where:{
          nome:{
            [Op.like]: query
          }
      }
    });

    
    
      res.send(validando);  
  }

};

module.exports = searchController;
