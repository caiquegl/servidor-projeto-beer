const { Comentarios } = require("../models");
const { Cerveja } = require("../models");

const moment = require('moment');
moment.locale('pt-br');

const data = moment().format('L');



const comentarioController = {

  create: async (req, res) => {
    const {idCerveja, idUsuario, comentario, nomeUsuario, nota} = req.body;

    console.log(idCerveja);
    
    let validando = await Comentarios.findAll({
      where:{
        idCerveja,
        idUsuario,
      }
    });
    console.log(data);
    if(validando.length  < 1){
      await Comentarios.create({
        idUsuario,
        idCerveja,
        comentario,
        nota,
        nomeUsuario,
        nomeUsuario,
        dataCriada: data,
        createdAt: new Date(),
        updatedAt: new Date(),
      });


      const contador = await Comentarios.count({
        where:{
          idCerveja
        }
      })
      const notas = await Comentarios.sum('nota',{
        where:{
          idCerveja
        }
      })

      let notaTotal = (notas / contador);

      await Cerveja.update({
        nota: notaTotal,
      },{
        where:{
          idCerveja
        }
      })


      res.send("Comentado")
    }else{
      res.send({msg:"Só pode fazer um comentario por pessoa"})
    }


  },
  listDaCerveja: async (req, res) => {
    const { idCerveja } = req.body;
    
    const teste = await Comentarios.findAll({
      where:{
        idCerveja
      }
    }
    );

    const contador = await Comentarios.count({
      where:{
        idCerveja
      }
    })

    let contando = contador



    res.send(teste);

  },
  notaCerveja: async (req, res) => {
    const { idCerveja } = req.body;
    
    const contador = await Comentarios.count({
      where:{
        idCerveja
      }
    })
    const nota = await Comentarios.sum('nota',{
      where:{
        idCerveja
      }
    })

    let notaTotal = (nota / contador);



    res.send({media: notaTotal});

  },
  countComent: async (req, res) => {
    const { idCerveja } = req.body;

    const contador = await Comentarios.count({
      where:{
        idCerveja
      }
    })

    let contando = contador



    res.send({contador: contando});

  },
  delete: async (req, res) => {
    const {idCerveja, idUsuario, idComentario} = req.body;

    console.log(idCerveja);
    console.log(idUsuario);
    console.log(idComentario)

    let validando = await Comentarios.findAll({
      where:{
        idCerveja,
        idUsuario
      }
    });

    if(validando.length  < 1){
      res.send("Só pode excluir o seu comentario");
    }else{
      await Comentarios.destroy({
        where:{
          idComentario,
          idUsuario
        }
      });
      res.send({msg:"Excluido"})
    }


  }

};

module.exports = comentarioController;
