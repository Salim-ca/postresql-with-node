const {Client} = require('pg')
const express = require('express');

const app= express();
app.use(express.json());

const con = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'testdb',
    password: '1234',
    port: 5432
})
con.connect().then(() =>console.log('connected'))

app.post('/postauto', (req, res) =>{
    const {name, email} = req.body
    const insert_query = "INSERT INTO USERS (name, email) VALUES ($1, $2) "
    con.query(insert_query, [name, email], (err, result) =>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send('posted')
        }
    })
})






app.listen(3000,() =>{
    console.log('the server is runnign.....')
})