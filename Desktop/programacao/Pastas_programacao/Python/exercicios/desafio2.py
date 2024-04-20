numeros=[]
for i in range(5):
    s=input("Numero:")
    n=float(s)
    numeros.append(n)
maior_par=0
for k in numeros:
    resto=k % 2
    if resto==0:
        if k>maior_par:
            maior_par=k
print(maior_par)
