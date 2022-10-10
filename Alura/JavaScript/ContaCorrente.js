export class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
        else {
            console.log("Saldo insuficinete");
        }
    }

    depositar(valor){
        if(valor > 0) {
            this.saldo += valor;
        }
    }
}