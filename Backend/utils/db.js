import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'bigynkkuuwjobehee9hq-mysql.services.clever-cloud.com', 
    user: 'un7o6diwmunexpkw',
    password: 'fBBa4SgOmZffDC2WKewL',
    database: 'bigynkkuuwjobehee9hq',
    port: 3306 
  });

con.connect((err) => {
    if (err) {
        console.log("❌ Conexión errónea:", err);
    } else {
        console.log("✅ Conexión exitosa a la base de datos");
    }
});

export default con;
