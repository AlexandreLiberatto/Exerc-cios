import java.util.Date;

public class Corretor extends Pessoa implements ReceberValor {
	
	private String registro;
	private Date dataAdmissao;
	private double comissao;
	private double totalComissaoAcumulada;

	public Corretor(String nome, String telefone, String endereco, String cpf, String registro, Date dataAdmissao, double comissao, double totalComissaoAcumulada) {
		super(nome, telefone, endereco, cpf);
		this.registro = registro;
		this.dataAdmissao = dataAdmissao;
		this.comissao = comissao;
		this.totalComissaoAcumulada = totalComissaoAcumulada;
	}
	
	@Override
	public void receber(double valor) {
		this.totalComissaoAcumulada += this.comissao; 
		System.out.println("O corretor Fulano está recebendo o valor de R$ " + totalComissaoAcumulada);
	}
	
	public void sacarComissoes(double valor) {
		this.totalComissaoAcumulada = totalComissaoAcumulada - valor;
	}

	public double getComissao() {
		return comissao;
	}

	public void setComissao(double comissao) {
		this.comissao = comissao;
	}

	public double getTotalComissaoAcumulada() {
		return totalComissaoAcumulada;
	}

	public void setTotalComissaoAcumulada(double totalComissaoAcumulada) {
		this.totalComissaoAcumulada = totalComissaoAcumulada;
	}

	public String getRegistro() {
		return registro;
	}

	public Date getDataAdmissao() {
		return dataAdmissao;
	}


}
