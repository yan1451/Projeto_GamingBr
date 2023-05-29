require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');

const port = process.env.API_PORT || 3001;
const app = require('./app');

app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(port);

console.log(`Api rodando na porta ${port}`);






