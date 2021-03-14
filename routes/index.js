const express = require("express");
const router = express.Router();

const userController = require("../controllers/usuarioController");
const comentarioController = require("../controllers/comentarioController");
const cervejaController = require("../controllers/cervejaController");
const searchController = require("../controllers/searchController");
const newsController = require("../controllers/newsletter");



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/cadastro", userController.create );
router.post("/logando", userController.logando);

router.get("/listarCerveja", cervejaController.index);
router.get("/maisAvaliada", cervejaController.maisAvaliadas);
router.get("/menosAvaliada", cervejaController.menosAvaliadas);
router.get("/zA", cervejaController.zA);
router.get("/aZ", cervejaController.aZ);


router.get("/cooper", cervejaController.cooper);
router.get("/dadoBier", cervejaController.dadoBier);
router.get("/asgard", cervejaController.asgard);
router.get("/importada", cervejaController.importada);
router.get("/paulaner", cervejaController.paulaner);
router.get("/blueMoon", cervejaController.blueMoon);
router.get("/paleAle", cervejaController.paleAle);
router.get("/ipa", cervejaController.ipa);
router.get("/redAle", cervejaController.redAle);
router.get("/especial", cervejaController.especial);
router.get("/weiss", cervejaController.weiss);
router.get("/witbier", cervejaController.witbier);












router.post("/listCervejaId", cervejaController.listId);

router.get("/itens");
router.post("/comentando", comentarioController.create);
router.post("/listComentando", comentarioController.listDaCerveja);
router.post("/deleteComentario", comentarioController.delete);
router.post("/countComentarios", comentarioController.countComent);
router.post("/notaCerveja", comentarioController.notaCerveja);
router.post("/busca", searchController.search);
router.post("/newsletter", newsController.create);







module.exports = router;
