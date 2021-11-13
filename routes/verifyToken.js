const jwt = require('jsonwebtoken');

// MIDDLEWARE
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Because Bearer <token>

    //user muỐn đặt là gì cũng đc
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json('Token is not valid !');
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated !');
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log(req);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed to access this!');
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  // console.log(req.user);
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed to access this!');
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
