const jwt = require('jsonwebtoken');
const constant = require("../constants/constants")
require('dotenv').config()

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.slice(7) : req.headers.authorization;
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: constant.UNAUTHORIZED });
    }
  } else {
    res.status(401).json({ error: constant.TOKEN_MISSING });
  }
  
};

module.exports = { auth };