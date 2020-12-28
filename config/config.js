var Client = require("mariasql");

var pool = new Client({
    host: "localhost",
    user: "GardeningUser",
    password: "c5V5cdKq8gDB4VDQ",
    db: "Gardening",
    connectionLimit: "10",
    charset: "utf8"
});

module.exports = pool;