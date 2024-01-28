import java.util.Date;

public class Locacao {
	
	private Date dataInicio;
	private Date dataTermino;
	private Date dataPagamento;
	private Propretario propretario;
	private Corretor corretor;
	private Imovel imovel;
	private Locatario locatario;
	
	public Locacao(Date dataInicio, Date dataTermino, Date dataPagamento, Locatario locatario, Propretario propretario, Corretor corretor, Imovel imovel) {
		this.dataInicio = dataInicio;
		this.dataTermino = dataTermino;
		this.dataPagamento = dataPagamento;
		this.propretario = propretario;
		this.corretor = corretor;
		this.imovel = imovel;
		this.locatario = locatario;
	}

	public void enviarCobranca() {
		System.out.println("E-mail: " + locatario.getEmail());
		System.out.println("O valor referente ao seu aluguel neste mês foi de R$ " + imovel.getValorLocacao());
	}
	
	public void pagarProprietario(double valor) {
		propretario.receber(valor);
		corretor.receber(valor);
	}

	public Date getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Date dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Date getDataTermino() {
		return dataTermino;
	}

	public void setDataTermino(Date dataTermino) {
		this.dataTermino = dataTermino;
	}

	public Date getDataPagamento() {
		return dataPagamento;
	}

	public void setDataPagamento(Date dataPagamento) {
		this.dataPagamento = dataPagamento;
	}

	public Propretario getPropretario() {
		return propretario;
	}

	public void setPropretario(Propretario propretario) {
		this.propretario = propretario;
	}

	public Corretor getCorretor() {
		return corretor;
	}

	public void setCorretor(Corretor corretor) {
		this.corretor = corretor;
	}

	public Imovel getImovel() {
		return imovel;
	}

	public void setImovel(Imovel imovel) {
		this.imovel = imovel;
	}
	
	
}
