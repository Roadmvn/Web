const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const validateSignup = (req, res, next) => {
  const { nom, prenom, email, motDePasse } = req.body;

  if (!nom || !prenom || !email || !motDePasse) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Adresse email non valide." });
  }

  next();
};

module.exports = { validateSignup };
