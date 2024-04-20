capital=input("Capital:")
prazo=input("Prazo:")
c=float(capital)
p=int(prazo)
if c>10000:
    j=5.5
else:
    j=3.7
juros=(c*j*p) / 100
montante=c + juros
print("Montante:",montante)
print("Juros:",juros)