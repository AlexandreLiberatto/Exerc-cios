notas=[]
for i in range(10):
    n=input("Nota?")
    num=float(n)
    notas.append(num)
print("Primeira nota:",notas[0])
print("Última nota:",notas[-1])
print("Quantidade de notas:",len(notas))
media=sum(notas) / len(notas)
print("Média:",media)