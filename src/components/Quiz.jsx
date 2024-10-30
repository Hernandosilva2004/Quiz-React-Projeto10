import { useState } from 'react';

const perguntas = [
    {
        pergunta: 'Qual demoday ganhou de melhor stand no segundo semestre de 2023?',
        opcoes: ['Limpay', 'Laçoos', 'Tutora.IA', 'Motirõ'],
        resposta: 'Laçoos'
    },
    {
        pergunta: 'Qual é o melhor professor(a)?',
        opcoes: ['Débora', 'Gabriel', 'Jailson', 'Aurora'],
        resposta: 'Aurora'
    },
    {
        pergunta: 'Quantos exercícios de lógica a equipe 2 fez?',
        opcoes: ['350', '450', '550', '650'],
        resposta: '550'
    }
];

function Quiz() {
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostas, setRespostas] = useState([]);
    const [resultado, setResultado] = useState(null);

    const responder = (respostaSelecionada) => {
        setRespostas([...respostas, respostaSelecionada]);
        if (indicePergunta + 1 < perguntas.lenght) {
            setIndicePergunta(indicePergunta + 1)
        } else {
            calcularResultado();
        }
    }

    const calcularResultado = () => {
        let pontuacao = 0;
        for (let i = 0; i < perguntas.lenght; i++) {
            if (respostas[i] === perguntas[i].resposta) {
                pontuacao++;
            }
        }
        setResultado(pontuacao);
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);
        setRespostas([]);
        setResultado(null);
    };

    return (
        <>
            {resultado !== null ? (
                <div>
                    <h2>Resultado do Quiz</h2>
                    <p>Voce acertou {resultado} de {perguntas.length} perguntas!</p>
                    <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Pergunta {indicePergunta + 1}</h2>
                    <p>{perguntas[indicePergunta].pergunta}</p>
                    <ul>
                        {perguntas[indicePergunta].opcoes.map((opcao, index) => (
                            <li key={index} onClick={() => responder(opcao)}>{opcao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )


}

export default Quiz;
