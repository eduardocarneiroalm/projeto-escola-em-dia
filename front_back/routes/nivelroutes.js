import express from 'express';

const router = express.Router();

const respostasCorretas = [
        {id: 1, resposta:'c) Buscaram preparar suas próprias refeições.'},
        {id: 2, resposta:'c) Ele precisa gastar energia para vencer a gravidade.'},
        {id: 3, resposta:'b) R$ 132,00'}
    ]


    router.post('/', (req, res) => {
        const respostas = req.body;
        let acertos = 0;

        //verificando as respostas e marcando como acerto se estiver correto
        respostasCorretas.forEach((item) => {
            const respostasUsuario = respostas[`questao${item.id}`];
            if (respostasUsuario === item.resposta) {
                acertos++;
            }

});
    //nivelando o usuário conforme os acertos
    let nivel = "";

        if(acertos === 3) {
            nivel = "Avançado. Muito bom!🎉🎉"; ;
        }
        else if (acertos === 2) {
            nivel = "Intermediário. Bom!👍";
        }

        else {
            nivel = "Iniciante. Vamos melhorar!👏👏";
        }
    //enviando para o front-end o nível e os acertos
    res.json({nivel: nivel, acertos: acertos});

    });

export default router;