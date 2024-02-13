
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
