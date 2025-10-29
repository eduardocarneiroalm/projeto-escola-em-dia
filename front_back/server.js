// //configurando o servidor

// import express from 'express';
// import nivelRoutes from './routes/nivelroutes.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const port = 3030;

// app.use(express.json());
// app.use(express.static('public'));

// app.use('/nivel', nivelRoutes);
// // Config pra usar __dirname em módulos ES
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, 'public')));

// // Força o servidor a carregar o HTML certo quando acessar "/"
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'public', 'index', 'index.html'));
// });

// app.listen(port, () => {
//     console.log("Servidor rodando na porta", port)
// })

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nivelRoutes from './routes/nivelroutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3030;

app.use(express.json());
app.use('/nivel', nivelRoutes);
app.use(express.static(path.join(__dirname, 'public')));

// aqui vai o caminho certo pro index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});