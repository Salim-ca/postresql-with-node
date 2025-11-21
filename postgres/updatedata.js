const {Client} = require('pg');
 const express = require('express');

 const app = express();
 app.use(express.json());
    
 const con = new Client({
    host: 'localhost', 
    user: 'postgres',
     database: 'testdb', 
     password: '1234',
     port: 5432,
 });
  
 con.connect().then(() => console.log('successfully connected to DB'));


 app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  if (isNaN(id)) {
    return res.status(400).send({ error: 'Invalid id parameter' });
  }

  const update_query = 'UPDATE blah SET name = $1 WHERE id = $2';

  con.query(update_query, [name, id], (err, result) => {
    if (err) {
      console.error('Update error', err);
      return res.status(500).send(err);
    }
    if (result.rowCount === 0) {
      // no row was updated
      return res.status(404).send({ message: 'Record not found' });
    }

    res.status(200).send({ message: 'Updated successfully' });
  });
});
 


 app.listen(3000, ()=> {
    console.log('server is running on port 3000');
 })