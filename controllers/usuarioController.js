const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");

const usuarioController = {
  create: async (req, res) => {
    const { nome, email, senha } = req.body;
    const hashPassword = bcrypt.hashSync(senha, 8);

    const usuario = await Usuario.findAll({
      where: {
        email,
      }
    });

    if (!usuario.length < 1) {
      return res.send("Conta ja cadastrada");
    } else {
      const user = await Usuario.create({
        nome,
        email,
        senha: hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.send(usuario)

    }

  },
  logando: async (req, res) => {
    const { email, senha } = req.body;
    
        const [usuario] = await Usuario.findAll({

            where: {
              email,
            }
            
        });

        
        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
          return res.send({msg:"Email ou senha errados!"});
        }else {
          let nome = usuario.nome;
          res.send(usuario);
        }

  },
};

module.exports = usuarioController;
