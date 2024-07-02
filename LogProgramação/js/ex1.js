/* a) Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior.*/

function informeVizinhos(number){
  let anterior = number -1;
  let posterior = number +1; 
  console.log(`O numero digitado foi ${number}, o numero anterior é ${anterior} e o posterior é ${posterior}`)

}

console.log(informeVizinhos(10))

/* b) Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente. */

function divisionPagamento(valorTotal, quantosClientes){
  return (valorTotal/quantosClientes).toFixed(2);
}
console.log(divisionPagamento(100.40, 3))

/* c) Elaborar um programa para uma loja, o qual leia o preço de um produto
e informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x. */

function pagamentoLoja(preco){
  let aVista = preco - (preco * (10/100));
  let parcelado = preco/3;

  console.log(` O preço do produto é R$ ${preco},00 e a vista o valor é:R$ ${aVista},00 e parcelado são 3 x de R$ ${parcelado},00`)

}
console.log(pagamentoLoja(60))



/* d) Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas. */

function media(nota1, nota2){
  let mediaNotas = (nota1 + nota2)/2;
  return mediaNotas
}

console.log(media(3, 7.3))