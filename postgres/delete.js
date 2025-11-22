const {Client} = require('pg');
const express = require('express');

const app = express();
app.use(express.json());

const con = new Client ({
    host: 'localhost',
    user: 'postgres', 
    password: '1234',
    database: 'testdb',
    port: '5432'
})
con.connect().then(() => console.log('connected'))

app.delete('/delete/:id', (req, res) =>{
    const id = req.params.id
    const  delete_query = "Delete from blah where id = $1"
    con.query(delete_query, [id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3000,()=>{
    console.log('The server is runnign....')
})