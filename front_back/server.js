// //configurando o servidor

// import express from 'express';
// import nivelRoutes from './routes/nivelroutes.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const port = 3030;

// app.use(express.json());
// app.use(express.static('public'));
// app.use(express.static('public/index'));
// app.use('/nivel', nivelRoutes);
// // Config pra usar __dirname em módulos ES
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Força o servidor a carregar o HTML certo quando acessar "/"
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'public', 'index', 'index.html'));
// });

// app.listen(port, () => {
//     console.log("Servidor rodando na porta", port)
// })

// Configurando o servidor
import express from 'express';
import nivelRoutes from './routes/nivelroutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Render usa a variável PORT automaticamente
const PORT = process.env.PORT || 3030;

// Corrigindo __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para interpretar JSON
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal ("/") → abre o index/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index', 'index.html'));
});

// Suas rotas personalizadas
app.use('/nivel', nivelRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});