module.exports = async function (req, res, proceed) {
  //si l'utilisateur est connecté
  if(req.user) {
    return proceed();
  }

  //sinon, redirection sur /login
  return res.redirect('/login');
};
