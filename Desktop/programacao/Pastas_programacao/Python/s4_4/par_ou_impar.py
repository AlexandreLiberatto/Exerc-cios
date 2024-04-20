
try:
    
  numero = float(input("Digite um número: "))

  if numero % 2 == 0:
    print("O número é par!")
  else: 
    print("O número é impar!")

except ValueError:

 print("Digite um número válido!")
