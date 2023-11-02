const express = require("express");
const mysql = require("mysql2");
const app = express();
const inscriptionRoutes = require("./routes/inscription.route");
const connexionRoute = require("./routes/connexionRoute");
const annoncesRoutes = require("./routes/annonces.route");
const utilisateursRoutes = require("./routes/utilisateurs.route");  



const connection = mysql.createConnection({
  host: "localhost",
  user: "tudy",
  password: "tudy",
  database: "db_tudy",
});

app.use(express.json());

app.use("", inscriptionRoutes);
app.use("", connexionRoute);
//app.use("", annoncesRoutes);
app.use("", utilisateursRoutes);






const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
