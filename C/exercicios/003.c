#include <stdio.h>

int main(int argc, char const *argv[]) {
    int num1, num2;
    int soma;
    
    printf("Digite o primeiro número: ");
    scanf("%d", &num1);
    
    printf("Digite o segundo número: ");
    scanf("%d", &num2);

    soma = num1 + num2; 
   
    printf("A soma dos números é: %d\n", soma);
    
    return 0;
}
