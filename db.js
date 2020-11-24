const Pool = require('pg').Pool;
const db = new Pool({
    user: 'ceph',
    host: 'database', //Update host as needed
    database: 'cephs_citchen',
    password: 'ceph',
    port: 5400 //Update as needed
})

module.exports = {getDB: () => db};

//if you don't have pg installed, do so with npm install pg
//The same goes with request