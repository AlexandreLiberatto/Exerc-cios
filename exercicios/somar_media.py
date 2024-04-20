def calcular_media(lista):
    if not lista:
        return 0 
    soma = sum(lista)
    return soma / len(lista)

def main():
    numeros = []
    while True:
        try:
            entrada = input("Digite um número ou fim para terminar: ")
            if entrada.lower() == 'fim':
                break
            numero = float(entrada)
            numeros.append(numero)
        except ValueError:
            print("Entrada inválida. Por favor, insira um número válido.")

    media = calcular_media(numeros)
    print("A média dos números fornecidos é: ", media)
if __name__ == "__main__":
    main()    


    