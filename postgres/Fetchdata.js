const {Client} = require('pg');
const express = require('express');
 const app =  express();
 app.use(express.json());
 
const con = new Client({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "testdb",
    port: 5432,
});

con.connect().then(()=> console.log("connected"))

app.post('./postData', (req, res)=>{

})

app.get('/fetchData', async (req, res) => {
  try {
    console.log('GET /fetchData hit'); // helpful for debugging
    const fetch_sql = 'SELECT * FROM blah'; // make sure the table name is exact
    const result = await con.query(fetch_sql);
    return res.json(result.rows);
  } catch (err) {
    console.error("GET /fetchData error:", err);
    return res.status(500).json({ error: err.message });
  }
});
app.listen(3000, ()=>{
    console.log("server is runnign........")
})