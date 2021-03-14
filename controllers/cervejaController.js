const { Cerveja } = require("../models");

const cervejaController = {
  index: async (req, res) => {
    const { page = 1 } = req.query;

    const beers = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
    })
    
    return res.send(beers);

  },
  listId: async (req, res) => {
    const { id } = req.body;

    const beers = await Cerveja.findAll({
      where:{
        idCerveja : id,
      }
    })
    
    return res.send(beers);
  },
  maisAvaliadas: async (req, res) => {
    const { page = 1 } = req.query;

    const beers = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      order:[
        ['nota', 'DESC']
      ]
    })
    return res.send(beers);
  },
  menosAvaliadas: async (req, res) => {
    const { page = 1 } = req.query;

    const beers = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      order:[
        ['nota', 'ASC']
      ]
    })
    return res.send(beers);
  },
  zA: async (req, res) => {
    const { page = 1 } = req.query;

    const beers = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      order:[
        ['nome', 'DESC']
      ]
    })
    return res.send(beers);
  },
  aZ: async (req, res) => {
    const { page = 1 } = req.query;

    const beers = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      order:[
        ['nome', 'ASC']
      ]
    })
    return res.send(beers);
  },

  cooper: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"cooper",
      }
    })

    res.send(list)
  },

  dadoBier: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"dado-bier",
      }
    })

    res.send(list)
  },

  asgard: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"asgard",
      }
    })

    res.send(list)
  },

  importada: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"importada",
      }
    })

    res.send(list)
  },

  paulaner: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"paulaner",
      }
    })

    res.send(list)
  },

  blueMoon: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        categoria:"blue-mon",
      }
    })

    res.send(list)
  },

  paleAle: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"pale-ale",
      }
    })

    res.send(list)
  },

  ipa: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"ipa",
      }
    })

    res.send(list)
  },
  redAle: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"red-ale",
      }
    })

    res.send(list)
  },

  especial: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"especial",
      }
    })

    res.send(list)
  },

  weiss: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"weiss",
      }
    })

    res.send(list)
  },

  witbier: async (req,res) =>{
    const { page = 1 } = req.query;

    const list = await Cerveja.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      where:{
        filtro:"witbier",
      }
    })

    res.send(list)
  },
};

module.exports = cervejaController;
