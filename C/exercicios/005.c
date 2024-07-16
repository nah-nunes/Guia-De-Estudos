#include <stdio.h>

int main() {
    float metros;
    int centimetros;

    // Solicita ao usuário para inserir o valor em metros
    printf("Digite o valor em metros: ");
    scanf("%f", &metros);

    // Converte metros para centímetros
    centimetros = (int)(metros * 100 + 0.5); // Adiciona 0.5 antes de converter para inteiro para arredondar corretamente

    // Exibe o resultado da conversão
    printf("O valor em centímetros é: %d cm\n", centimetros);

    return 0;
}
