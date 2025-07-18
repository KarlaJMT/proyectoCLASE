require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PW || '',
    database: process.env.MSQL_DB || 'cobranza',
  },
};
