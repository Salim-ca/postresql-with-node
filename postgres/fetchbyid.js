const {Client} = require('pg');
const express = require('express');
 const con = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'testdb',
     password: '1234',
     port: 5432,
 });
 con.connect().then(()=> console.log('successfully connected '));
  const app = express();
  app.use(express.json());

app.post('/postdata', (req, res) => {

})
app.get('/fetchData', (req, res) => {

})

app.get('/fetchbyid/:id',  (req, res) => {
     const id = req.params.id;
     const fetch_query = 'SELECT * FROM blah WHERE id = $1';
     con.query(fetch_query, [id], (err, result) => {
        if(err){
            res.send(err)
        }else{
            res.send(result.rows)
        }
     })
})
 
 
 
 
 
 
  app.listen(3000, ()=> {
    console.log('server is running on port 3000');
 })