import java.util.Date;

public class Pricipal {
    public static void main(String[] args) {
       
        Locatario locatario = new Locatario("NomeLocatario", "123456789", "EnderecoLocatario", "CPF123", "email@dominio.com", "5000");
        Propretario proprietario = new Propretario("NomeProprietario", "987654321", "EnderecoProprietario", "CPF456", "Conta123", "Agencia456");
        Corretor corretor = new Corretor("NomeCorretor", "111222333", "EnderecoCorretor", "CPF789", "Registro123", new Date(), 0.5, 0.0);
        Imovel apartamento = new Apartamento(1, "EnderecoApartamento", 1000.0, 1, 2, 1, 2, 101, 200.0, 50.0, 10.0);
        Imovel casa = new Casa(2, "EnderecoCasa", 3, 800.0, 1200.0, 2, 3, 2, 2);
        Date dataInicio = new Date();
        Date dataTermino = new Date(dataInicio.getTime() + 30 * 24 * 60 * 60 * 1000);
        Date dataPagamento = new Date();

        Locacao locacaoApartamento = new Locacao(dataInicio, dataTermino, dataPagamento, locatario, proprietario, corretor, apartamento);
        Locacao locacaoCasa = new Locacao(dataInicio, dataTermino, dataPagamento, locatario, proprietario, corretor, casa);

        locacaoApartamento.enviarCobranca();
        locacaoApartamento.pagarProprietario(1000.0);

        locacaoCasa.enviarCobranca();
        locacaoCasa.pagarProprietario(1200.0);
    }
}

