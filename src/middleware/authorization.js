const jwt = require('jsonwebtoken');
const constant = require("../constants/constants")
require('dotenv').config()

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = req.headers.authorization.startsWith('Bearer ') ? req.headers.authorization.slice(7) : req.headers.authorization;
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("req.user", req.user);
      next();
    } catch (err) {
      res.status(401).json({ error: constant.UNAUTHORIZED });
    }
  } else {
    res.status(401).json({ error: constant.TOKEN_MISSING });
  }
  
};

module.exports = { verifyToken };