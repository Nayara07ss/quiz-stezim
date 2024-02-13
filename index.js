```javascript
const perguntas = [
  {
    pergunta: "Qual é o nome do personagem interpretado por Ryan Gosling em La La Land?",
    respostas: [
      "A) Sebastian",
      "B) Mia",
      "C) Keith"
    ],
    correta: 0
  },
  {
    pergunta: "Quem dirigiu o filme La La Land?",
    respostas: [
      "A) Christopher Nolan",
      "B) Damien Chazelle",
      "C) Quentin Tarantino"
    ],
    correta: 1
  },
  {
    pergunta: "Em qual cidade se passa a maior parte da história de La La Land?",
    respostas: [
      "A) Nova York",
      "B) Paris",
      "C) Los Angeles"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a profissão de Mia, interpretada por Emma Stone?",
    respostas: [
      "A) Cantora",
      "B) Atriz",
      "C) Bailarina"
    ],
    correta: 1
  },
  {
    pergunta: "Qual prêmio o filme La La Land ganhou no Oscar 2017?",
    respostas: [
      "A) Melhor Filme",
      "B) Melhor Diretor",
      "C) Nenhum prêmio"
    ],
    correta: 2
  },
  {
    pergunta: "Quem interpreta o papel do chefe de Sebastian, Keith?",
    respostas: [
      "A) John Legend",
      "B) Bradley Cooper",
      "C) Justin Timberlake"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o gênero principal do filme La La Land?",
    respostas: [
      "A) Comédia",
      "B) Drama",
      "C) Musical"
    ],
    correta: 2
  },
  {
    pergunta: "Quantos Oscars o filme La La Land ganhou?",
    respostas: [
      "A) 3",
      "B) 5",
      "C) 7"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da música principal de La La Land?",
    respostas: [
      "A) City of Stars",
      "B) Another Day of Sun",
      "C) Audition (The Fools Who Dream)"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano La La Land foi lançado?",
    respostas: [
      "A) 2014",
      "B) 2016",
      "C) 2018"
    ],
    correta: 1
  }
];
```
  // Seleciona o elemento HTML com o ID "quiz"
  const quiz = document.querySelector('#quiz');
  // Seleciona o elemento HTML "template"
  const template = document.querySelector('template');
  
  // Define um conjunto para armazenar as respostas corretas
  const respostasCorretas = new Set();
  // Obtém o número total de perguntas
  const totalDePerguntas = perguntas.length;
  // Seleciona o elemento HTML para mostrar o número de respostas corretas
  const mostrarTotal = document.querySelector('#acertos span');
  // Atualiza o conteúdo para exibir o número inicial de respostas corretas
  mostrarTotal.textContent = respostasCorretas.size + ' de ' + totalDePerguntas;
  
  // Itera sobre cada pergunta
  perguntas.forEach((pergunta, indice) => {
    // Clona o conteúdo do template para criar uma nova pergunta
    const quizItem = template.content.cloneNode(true);
    // Define o texto da pergunta
    quizItem.querySelector('h3').textContent = pergunta.pergunta;
  
    // Itera sobre cada resposta da pergunta atual
    pergunta.respostas.forEach((resposta, i) => {
      // Clona o elemento "dt" do template para criar uma nova opção de resposta
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      // Define o texto da opção de resposta
      dt.querySelector('span').textContent = resposta;
      // Define um nome único para o input, relacionado à pergunta
      dt.querySelector('input').setAttribute('name', 'pergunta' + indice);
      // Define o valor da opção de resposta
      dt.querySelector('input').value = i;
  
      // Define o evento onchange para verificar se a resposta está correta
      dt.querySelector('input').addEventListener('change', (event) => {
        // Verifica se a resposta selecionada pelo usuário é a correta
        const estaCorreta = parseInt(event.target.value) === pergunta.correta;
  
        // Se a resposta estiver correta, adiciona a pergunta ao conjunto de respostas corretas
        if (estaCorreta) {
          respostasCorretas.add(pergunta);
        } else {
          // Se a resposta não estiver correta, remove a pergunta do conjunto de respostas corretas
          respostasCorretas.delete(pergunta);
        }
        
        // Atualiza o contador de respostas corretas exibido na página
        mostrarTotal.textContent = respostasCorretas.size + ' de ' + totalDePerguntas;
      });
  
      // Adiciona a opção de resposta à pergunta
      quizItem.querySelector('dl').appendChild(dt);
    });
  
    // Remove o texto "Resposta A"
    quizItem.querySelector('dl dt').remove();
  
    // Adiciona a pergunta à página
    quiz.appendChild(quizItem);
  });
  