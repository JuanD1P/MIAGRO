import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'bavtb97nyrdvkghopy9i-mysql.services.clever-cloud.com', 
    user: 'uysekncqgasmw8cs',
    password: 'XG4TDNu7Fy8z0IQDcmz1',
    database: 'bavtb97nyrdvkghopy9i',
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
