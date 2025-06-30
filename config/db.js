const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.connect((err, client, release) => {
    if (err){
        return console.log('Error acquiring client', err.stack);
    }
    console.log('Successfully connected to DB');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
