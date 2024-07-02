/* Crie um programa que capture dados de um formulário de cadastro e responda em um modal se apresentando ao usuário*/


/*
passo 1: selecionar input nome 

passo 2: selecionar box

passo 3: identificar quais interesses estão selecionados 

passo 4 : Criar a resposta 

passo 5: mostrar na tela


*/

let nome = document.getElementById('name');
let inform = document.querySelector('.inform');
const form = document.querySelector('#form');
let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let divResultado = document.querySelector('#div');




form.addEventListener('submit', function(){
  event.preventDefault();
  const name = nome.value;
  
  inform.style.display = 'none';

  const checkboxes = document.querySelectorAll('input[name="interesse"]:checked')
  const itensSelecionados =[];
  checkboxes.forEach(function(checkbox) {
    // Obtendo o label associado ao checkbox
    const label = checkbox.parentElement.textContent.trim();
    itensSelecionados.push(label);
});

  h1.textContent= `Olá ${name}, obrigada(o) por se cadastrar!`;
  h2.textContent = `Em breve você receberá e-mails com os temas: `;
  divResultado.innerHTML = '<h2>' + itensSelecionados.join(', ').toLocaleLowerCase() + '</h2>';
            



  

  console.log('Formulário enviado!')
});









