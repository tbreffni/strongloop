module.exports = {
  mysql: {
    connector: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'Dev'
  }
};
