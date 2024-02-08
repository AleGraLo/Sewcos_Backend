require('dotenv').config();
const express = require('express');
const app = express();

const loggerMiddleware = require('./middlewares/loggerMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

// Configurar el motor de plantillas (EJS, en este caso)
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware de Logger
app.use(loggerMiddleware);

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Usar rutas
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

// Middleware de Manejo de Errores
app.use(errorHandlerMiddleware);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
