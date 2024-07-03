/*a) Elaborar um programa para um Cinema, que leia o título e a duração de
um filme em minutos. Exiba o título do filme e converta a duração para
horas e minutos, conforme destacado na Figura 2.6.*/


/*

 1 - selecionar o button
 2 - identificar se foi selecionado algum dos filmes 
 3 - retornar o valor em hora

*/


let button = document.querySelector('#button');
//let legend = document.querySelectorAll();
let h2 = document.querySelector('.h2');
let inform = document.querySelector('.inform');

button.addEventListener('click', function(){
  event.preventDefault;
  inform.style.display = 'none';
  console.log('clicado')
  h2.textContent = `Em breve você receberá e-mails com os temas: `;

})