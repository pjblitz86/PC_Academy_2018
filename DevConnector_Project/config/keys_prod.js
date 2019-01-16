module.exports = {
  PORT: process.env.PORT || 5000,
  CONNECTION_STRING: process.env.MONGO_URI,
  JWT_SECRET: process.env.SECRET_OR_KEY
};