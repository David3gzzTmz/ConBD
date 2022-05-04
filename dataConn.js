const dataConn = require('./dataConn');
const mysql = require('mysql');

const   getCategorybyID= async (req, res) => {
  const {id} = req.params;
  const pool = await dataConn.getConnection();
  const sql "select * from category ";
  
  pool.query(sql, function (err,result,fields) {
      if (err) throw err;
      return res.json(result);
  });
  }
