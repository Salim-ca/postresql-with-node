const {Client} = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const con = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'testdb',
    port: 5432
})
con.connect().then(() =>console.log('connected'));


app.get('/minmax', async (req, res) => {
    try {
        const query = 'SELECT MIN(id) AS min_id, MAX(id) AS max_id FROM blah';
        const result = await con.query(query);
        console.log(result.rows); // Log the result
        res.json(result.rows[0]); // Send the result back to client
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});










app.listen(3000, ()=> {
    console.log('server is running ..........')
})