
public class Casa extends Imovel {
	
	private int qtdadeAndares;
	private double precoAluguel;
	private int tempoDeEstadia;

	public Casa(int codigo, String endereco, int tempoDeEstadia, double precoAluguel, double valorLocacao, int vagasGaragem, int quartos, int banheiros, int qtdadeAndares) {
		super(codigo, endereco, valorLocacao, vagasGaragem, quartos, banheiros);
		this.qtdadeAndares = qtdadeAndares;
		this.precoAluguel = precoAluguel;
		this.tempoDeEstadia = tempoDeEstadia;
	}
	
	@Override
	public void calcularAluguel() {
		double aluguel = tempoDeEstadia * precoAluguel;
		   this.setValorLocacao(aluguel);
	}

	public int getQtdadeAndares() {
		return qtdadeAndares;
	}

	public void setQtdadeAndares(int qtdadeAndares) {
		this.qtdadeAndares = qtdadeAndares;
	}

	public double getPrecoAluguel() {
		return precoAluguel;
	}

	public void setPrecoAluguel(double precoAluguel) {
		this.precoAluguel = precoAluguel;
	}

	public int getTempoDeEstadia() {
		return tempoDeEstadia;
	}

	public void setTempoDeEstadia(int tempoDeEstadia) {
		this.tempoDeEstadia = tempoDeEstadia;
	}
	
	

}
