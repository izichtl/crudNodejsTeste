const app = require('./server');
const PORT = process.env.PORT || 8080

app.listen(PORT)
console.log(`Servidor Rodando ==> http://localhost:${PORT}/`)