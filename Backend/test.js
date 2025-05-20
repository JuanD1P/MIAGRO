import dotenv from 'dotenv';
dotenv.config();

console.log("Intentando leer TEST_VAR desde .env...");
console.log(process.env.TEST_VAR);