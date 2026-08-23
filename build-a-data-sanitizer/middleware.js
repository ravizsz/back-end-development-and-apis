function inputCleaner(req, res, next) {
  if (req.body.username) {
    req.body.username = req.body.username.toLowerCase();
  }

  if (req.body.comment) {
    req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
  }

  next();
}

function inputValidator(req, res, next) {
  if (req.body.username && req.body.username.length >= 3) {
    next();
  } else {
    res.redirect('/form?error=Username%20must%20be%20at%20least%203%20characters.');
  }
}

module.exports = { inputCleaner, inputValidator };
