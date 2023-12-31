const usuarioRoutes = require('./routes/usuarioRoutes');
const articuloRoutes = require('./routes/articuloRoutes');

const app = express();
const port = 3000;

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Sample API',
    version: '1.0.0',
    description: 'A simple Express Sample API',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());
