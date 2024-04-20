
public class Propretario extends Pessoa implements ReceberValor {
	
	private String conta;
	private String agencia;

	public Propretario(String nome, String telefone, String endereco, String cpf, String conta, String agencia) {
		super(nome, telefone, endereco, cpf);
		this.conta = conta;
		this.agencia = agencia;	
	}
	
	@Override
	public void receber(double valor) {
		String valorRecebido = Double.toString(valor);
		this.conta += valorRecebido;
		System.out.println("O proprietario " + getNome() + " está recebendo o valor de R$ " + valorRecebido);
		
	}

	public String getConta() {
		return conta;
	}

	public void setConta(String conta) {
		this.conta = conta;
	}

	public String getAgencia() {
		return agencia;
	}

	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	
	

}
