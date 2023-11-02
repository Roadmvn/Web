const express = require("express");
const router = express.Router();
const annoncesController = require("../controllers/annonces.controller");
const annoncesMiddleware = require("../middleware/annonces.middleware");


router.post("/", annoncesController.creerAnnonce);
router.get("/", annoncesController.recupererAnnonces);
router.get(
  "/:id",
  annoncesMiddleware.verifierAnnonceExiste,
  annoncesController.recupererAnnonce
);
router.put(
  "/:id",
  annoncesMiddleware.verifierAnnonceExiste,
  annoncesController.mettreAJourAnnonce
);
router.delete(
  "/:id",
  annoncesMiddleware.verifierAnnonceExiste,
  annoncesController.supprimerAnnonce
);

module.exports = router;
