//configurando o servidor

import express from 'express';
import nivelRoutes from './routes/nivelroutes.js';

const app = express();
const port = 3030;

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('public/index'));
app.use('/nivel', nivelRoutes);

app.listen(port, () => {
    console.log("Servidor rodando na porta", port)
})