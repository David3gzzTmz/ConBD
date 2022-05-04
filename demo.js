
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password "itesm2022",
database: "testdb"
});

con.connect(function(err){
	if(err) trhow err;
	console.log("connected");
	con.query("SELECT*FROM category" ,function (err,result, fields) ){
	if (err) throw err;
	console.log(result);
		  });
	    });
