module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'store-postgres',
    define: {
        timestamp: true,
        undescored: true,
    },
}