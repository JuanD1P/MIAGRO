import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import axios from 'axios';
import { CohereClient } from 'cohere-ai';


const router = express.Router();

let cohere;

async function initializeCohere() {
    const apiKey = '8Uwiz86ll4I1072zXBgnliPCO76GDrXmcK4OVjxy';
    const TEST_VAR = 'test_value';


    if (!apiKey) {
        console.error("Error: La variable de entorno COHERE_API_KEY no está configurada.");
        return null;
    }

    try {
        const client = new CohereClient({
            token: apiKey,
            apiVersion: '2022-12-06',
        });
        console.log("Cliente de Cohere inicializado correctamente.");
        return client;
    } catch (error) {
        console.error("Error al inicializar Cohere:", error);
        return null;
    }
}

// Inicializar Cohere al cargar el módulo
initializeCohere().then(client => {
    cohere = client;
});

// 🚀 REGISTRO DE USUARIOS
router.post('/register', async (req, res) => {
    const { email, password, nombre_completo } = req.body;

    if (!email || !password || !nombre_completo) {
        return res.json({ registrationStatus: false, Error: "Faltan datos" });
    }

    try {
        con.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, result) => {
            if (err) {
                console.error("Error en la consulta:", err);
                return res.json({ registrationStatus: false, Error: "Error en la base de datos" });
            }
            if (result.length > 0) {
                return res.json({ registrationStatus: false, Error: "El email ya está registrado" });
            }

            // Encriptar la contraseña
            const hashedPassword = await bcryptjs.hash(password, 10);

            // Insertar usuario con rol 'USER' por defecto
            const sql = "INSERT INTO usuarios (email, password, nombre_completo, rol) VALUES (?, ?, ?, 'USER')";
            con.query(sql, [email, hashedPassword, nombre_completo], (err, result) => {
                if (err) {
                    console.error("Error al insertar usuario:", err);
                    return res.json({ registrationStatus: false, Error: "Error de inserción" });
                }
                console.log("Usuario registrado correctamente");
                return res.json({ registrationStatus: true });
            });
        });

    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ registrationStatus: false, Error: "Error interno" });
    }
});

// 🚀 LOGIN DE USUARIOS
router.post('/userlogin', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM usuarios WHERE email = ?";
    con.query(sql, [email], async (err, result) => {
        if (err) {
            console.error("❌ Error en la consulta:", err);
            return res.json({ loginStatus: false, Error: "Error en la base de datos" });
        }
        if (result.length === 0) {
            return res.json({ loginStatus: false, Error: "Usuario no encontrado" });
        }

        try {
            const validPassword = await bcryptjs.compare(password, result[0].password);
            if (!validPassword) {
                return res.json({ loginStatus: false, Error: "Contraseña incorrecta" });
            }

            // Crear el token con el rol
            const token = jwt.sign({ role: result[0].rol, email: email }, "jwt_secret_key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ loginStatus: true, role: result[0].rol });

        } catch (error) {
            console.error("❌ Error en login:", error);
            return res.json({ loginStatus: false, Error: "Error interno" });
        }
    });
});

// 🌤️ RUTA PARA CONSULTAR EL CLIMA
const API_KEY = 'fbe03058e01f39953e044adfbae9772b';
const CIUDAD = 'Facatativá';
const PAIS = 'CO';

router.get('/clima', async (req, res) => {
  try {
    // 🌡️ PRIMERA LLAMADA: clima actual
    const urlActual = `https://api.openweathermap.org/data/2.5/weather?q=${CIUDAD},${PAIS}&appid=${API_KEY}&units=metric&lang=es`;
    const respuestaActual = await axios.get(urlActual);
    const actual = respuestaActual.data;

    const datosHoy = [{
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: actual.main.temp,
      sensacion: actual.main.feels_like,
      temp_min: actual.main.temp_min,
      temp_max: actual.main.temp_max,
      presion: actual.main.pressure,
      humedad: actual.main.humidity,
      descripcion: actual.weather[0].description,
      icono: actual.weather[0].icon,
      viento: {
        velocidad: actual.wind.speed,
        grados: actual.wind.deg,
        rafaga: actual.wind.gust || null
      },
      nubes: actual.clouds.all,
      lluvia: actual.rain ? actual.rain["1h"] || 0 : 0,
      nieve: actual.snow ? actual.snow["1h"] || 0 : 0,
      visibilidad: actual.visibility
    }];

    // ⏩ SEGUNDA LLAMADA
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${CIUDAD},${PAIS}&appid=${API_KEY}&units=metric&lang=es`;
    const respuestaForecast = await axios.get(urlForecast);
    const datos = respuestaForecast.data.list;

    const pronostico = datos.filter(item => item.dt_txt.includes("12:00:00")).map(dia => ({
      fecha: dia.dt_txt.split(" ")[0],
      temp: dia.main.temp,
      humedad: dia.main.humidity,
      presion: dia.main.pressure,
      descripcion: dia.weather[0].description,
      icono: dia.weather[0].icon,
      viento: {
        velocidad: dia.wind.speed,
        grados: dia.wind.deg,
        rafaga: dia.wind.gust || null
      },
      nubes: dia.clouds.all,
      lluvia: dia.rain ? dia.rain["3h"] || 0 : 0,
      nieve: dia.snow ? dia.snow["3h"] || 0 : 0,
      visibilidad: dia.visibility
    }));



    res.json({
      ciudad: respuestaForecast.data.city.name,
      pais: respuestaForecast.data.city.country,
      hoy: datosHoy,
      pronostico: pronostico
    });

  } catch (error) {
    console.error('❌ Error al obtener el clima:', error.message);
    res.status(500).json({ error: 'No se pudo obtener el clima' });
  }
});


router.post('/chat', async (req, res) => {


    const { prompt } = req.body;

    if (!cohere) {
        return res.status(500).json({ error: 'El cliente de Cohere no se ha inicializado correctamente.' });
    }

    if (!prompt || prompt.trim() === '') {
        return res.status(400).json({ error: 'El prompt es obligatorio.' });
    }

        const triviales = ['hola', 'buenas', 'hey', 'holi', 'qué tal'];
    if (triviales.includes(prompt.trim().toLowerCase())) {
        return res.json({ response: "¡Hola! ¿En qué puedo ayudarte relacionado con practicas agricolas" });
    }

    try {

const fullPrompt = `Eres un experto en técnicas agrícolas sostenibles. Responde de forma clara, profesional y útil. Todas tus respuestas deben estar enfocadas en prácticas ecológicas, agricultura regenerativa, agroecología y sostenibilidad en el campo.

Ejemplo 1:
Usuario: ¿Cómo puedo sembrar maíz de forma sostenible?
Asistente: Para sembrar maíz de forma sostenible, comienza con una preparación mínima del suelo para evitar su degradación. Utiliza compost o abono orgánico en lugar de fertilizantes químicos. Emplea riego por goteo para ahorrar agua y considera la rotación de cultivos con leguminosas para mejorar la fertilidad del suelo. Además, puedes usar coberturas vegetales para evitar la erosión.

Ejemplo 2:
Usuario: ¿Cómo controlo plagas en el cultivo de tomate sin químicos?
Asistente: Puedes usar extractos naturales como el de neem, ajo o chile, aplicar trampas cromáticas y fomentar la presencia de insectos benéficos como las mariquitas o las avispas parasitoides.

Ejemplo 3:
Usuario: ¿Qué puedo hacer para mejorar el suelo?
Asistente: Puedes incorporar compost, practicar la labranza mínima, sembrar cultivos de cobertura y aplicar biofertilizantes para regenerar la microbiota del suelo.

Ejemplo 4:
Usuario: hola
Asistente: ¡Hola! ¿En qué puedo ayudarte relacionado con técnicas agrícolas sostenibles?

Usuario: ${prompt}
Asistente: `; // Espacio al final del prompt

        const response = await cohere.generate({
            model: 'command', 
            prompt: fullPrompt,
            max_tokens: 150,
            temperature: 0.3, 
            stop_sequences: ['Usuario:', 'Asistente:'],
        });

        const generatedText = response.generations[0].text.trim();
        res.json({ response: generatedText });
    } catch (error) {
        console.error('Error al contactar con Cohere:', error);
        res.status(500).json({ error: 'Error al generar respuesta desde el modelo de IA.' });
    }
});

export const userRouter = router;

// 🧾 OBTENER TODOS LOS USUARIOS
router.get('/usuarios', (req, res) => {
    con.query("SELECT id, nombre_completo, email, rol FROM usuarios", (err, result) => {
        if (err) {
            console.error("Error al obtener usuarios:", err);
            return res.status(500).json({ error: "Error al obtener usuarios" });
        }
        res.json(result);
    });
});

// 🛠️ ACTUALIZAR ROL DE USUARIO
router.put('/usuarios/:id/rol', (req, res) => {
    const { id } = req.params;
    const { rol } = req.body;

    if (!['USER', 'ADMIN'].includes(rol)) {
        return res.status(400).json({ error: "Rol inválido" });
    }

    con.query("UPDATE usuarios SET rol = ? WHERE id = ?", [rol, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar rol:", err);
            return res.status(500).json({ error: "Error al actualizar el rol" });
        }
        res.json({ message: "Rol actualizado correctamente" });
    });
});


// 🧾 OBTENER TODOS LOS USUARIOS
router.get('/usuarios', (req, res) => {
    con.query("SELECT id, nombre_completo, email, rol FROM usuarios", (err, result) => {
        if (err) {
            console.error("Error al obtener usuarios:", err);
            return res.status(500).json({ error: "Error al obtener usuarios" });
        }
        res.json(result);
    });
});

// 🛠️ ACTUALIZAR ROL DE USUARIO
router.put('/usuarios/:id/rol', (req, res) => {
    const { id } = req.params;
    const { rol } = req.body;

    if (!['USER', 'ADMIN'].includes(rol)) {
        return res.status(400).json({ error: "Rol inválido" });
    }

    con.query("UPDATE usuarios SET rol = ? WHERE id = ?", [rol, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar rol:", err);
            return res.status(500).json({ error: "Error al actualizar el rol" });
        }
        res.json({ message: "Rol actualizado correctamente" });
    });
});


// 🗑️ ELIMINAR USUARIO POR ID
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    con.query("DELETE FROM usuarios WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("❌ Error al eliminar usuario:", err);
            return res.status(500).json({ error: "Error al eliminar el usuario" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario eliminado correctamente" });
    });
});
