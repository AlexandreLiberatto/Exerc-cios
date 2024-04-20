def calculoFatorial(a):
 
 acumulador = 1

 for i in range(1, a + 1):
 
  acumulador *= i

 return acumulador


try: 
 
 numero = int(input("Digite um número para calcular o fatorial: "))

 print("O fatorial de ", numero, " é ", calculoFatorial(numero) )

except ValueError:
 
 print("digite um número válido!")