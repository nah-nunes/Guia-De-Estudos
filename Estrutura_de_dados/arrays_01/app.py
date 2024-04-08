# array com memória estática
import array 
arr = array.array('i', [1,2,3,4,5])

#array dinâmico
arrr = []

## Operações com arrays 

## Percorrer o array 
numbers = array.array('i',[1,2,3,4,5,6])
for number in numbers:
  print(number, end= " ")

# inserção 
number = [1,2,3,4,5,7,6, None, None]
def insertElements(arr, n, x, pos):
    # Ajuste da posição para o índice real na lista
    pos -= 1
    
    # Verifica se há espaço suficiente no array para adicionar um novo elemento
    #if n >= len(arr):
        #return "Não há espaço suficiente no array para adicionar mais elementos."
    
    # Movendo os elementos para abrir espaço para o novo elemento
    for i in range(n-1, pos-1, -1):
        arr[i+1] = arr[i]

    # Inserindo o novo elemento na posição especificada
    arr[pos] = x
    
    return arr

result = insertElements(number, 8,10, 3)
print(result)

# deleção 
