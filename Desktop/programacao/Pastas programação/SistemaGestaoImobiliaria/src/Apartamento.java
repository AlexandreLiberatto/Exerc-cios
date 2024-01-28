
public class Apartamento extends Imovel {
	
	private int andar;
	private int numero;
	private double condominio;
	private double fundoReserva;
	private double investimentos;

	public Apartamento(int codigo, String endereco, double valorLocacao, int vagasGaragem, int quartos, int banheiros, int andar, int numero, double condominio, double fundoReserva, double investimentos) {
		super(codigo, endereco, valorLocacao, vagasGaragem, quartos, banheiros);
		this.andar = andar;
		this.numero = numero;
		this.condominio = condominio;
		this.fundoReserva = fundoReserva;
		this.investimentos = investimentos;
	}

	@Override
	 public void calcularAluguel() {
        double valorCalculado = getValorLocacao() + condominio - fundoReserva - investimentos;
        setValorLocacao(valorCalculado);
    }

	public double getCondominio() {
		return condominio;
	}

	public void setCondominio(double condominio) {
		this.condominio = condominio;
	}

	public double getFundoReserva() {
		return fundoReserva;
	}

	public void setFundoReserva(double fundoReserva) {
		this.fundoReserva = fundoReserva;
	}

	public double getInvestimentos() {
		return investimentos;
	}

	public void setInvestimentos(double investimentos) {
		this.investimentos = investimentos;
	}

	public int getAndar() {
		return andar;
	}

	public int getNumero() {
		return numero;
	}
	
	
}
