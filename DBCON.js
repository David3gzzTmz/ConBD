
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password "itesm2022",
database: "testdb"
});

async function getConnection(){
try{ 
  const pool = await mysql.createConnection(dbSettings);
  return pool;
}
  catch(error){
  console.error(error);
  }
}

module.export = {
  getConnection: getConnection
}
