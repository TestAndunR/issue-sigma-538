module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["andunk"] = {
        host: process.env.EndPoint_rdsAndunk,
        port: process.env.Port_rdsAndunk,
        user: process.env.User_rdsAndunk,
        password: process.env.Password_rdsAndunk,
        database: "sigma538"
    };
};