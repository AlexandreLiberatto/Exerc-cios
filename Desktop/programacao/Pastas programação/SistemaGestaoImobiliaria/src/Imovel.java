
public abstract class Imovel {
	
	private int codigo;
	private String endereco;
	private double valorLocacao;
	private int vagasGaragem;
	private int quartos;
	private int banheiros;
	
	public Imovel(int codigo, String endereco, double valorLocacao, int vagasGaragem, int quartos, int banheiros) {
		this.codigo = codigo;
		this.endereco = endereco;
		this.valorLocacao = valorLocacao;
		this.vagasGaragem = vagasGaragem;
		this.quartos = quartos;
		this.banheiros = banheiros;
	}
	
	public abstract void calcularAluguel();

	public double getValorLocacao() {
		return valorLocacao;
	}

	public void setValorLocacao(double valorLocacao) {
		this.valorLocacao = valorLocacao;
	}

	public int getVagasGaragem() {
		return vagasGaragem;
	}

	public void setVagasGaragem(int vagasGaragem) {
		this.vagasGaragem = vagasGaragem;
	}

	public int getQuartos() {
		return quartos;
	}

	public void setQuartos(int quartos) {
		this.quartos = quartos;
	}

	public int getBanheiros() {
		return banheiros;
	}

	public void setBanheiros(int banheiros) {
		this.banheiros = banheiros;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getEndereco() {
		return endereco;
	}
	
	

}
