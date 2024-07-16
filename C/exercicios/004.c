#include <stdio.h>



int main(int argc, char const *argv[])
{
  float nota1, nota2, nota3, nota4;
  float media = 0;
  printf("Digite a nota1:");
  scanf("%f", &nota1);

  printf("Digite a nota2:");
  scanf("%f", &nota2);

  printf("Digite a nota3:");
  scanf("%f", &nota3);

  printf("Digite a nota4:");
  scanf("%f", &nota4);



  media = (nota1 + nota2 + nota3 + nota4)/4;



  printf(" A media das notas foi: %f\n", media);
  return 0;
}
