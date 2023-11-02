const express = require("express");
const router = express.Router();
const connexionController = require("../controllers/connexionController");
const connexionMiddleware = require("../middleware/connexionMiddleware");


router.post("/connexion", connexionController);

module.exports = router;
