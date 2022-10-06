class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    _cliente;
    agencia;
    saldo;

    set cliente(novoValor){
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

/*const cliente1 = new Cliente();
cliente1.nome = "William";
cliente1.cpf = 37490547890; */

/* const cliente2 = new Cliente()
cliente2.nome = "Larissa";
cliente2.cpf = 93652733468 */

const contaWilliam = new ContaCorrente();
contaWilliam.cliente = new Cliente();
contaWilliam._cliente.nome = "William";
contaWilliam._cliente.cpf = 37490547890;
contaWilliam.agencia = 6098;
contaWilliam.saldo = 1800;

contaWilliam.depositar(1200);
contaWilliam.sacar(600);

const contaLarissa = new ContaCorrente();
contaLarissa.cliente = new Cliente();
contaLarissa._cliente.nome = "Larissa";
contaLarissa._cliente.cpf = 93652733468;
contaLarissa.agencia = 4562;
contaLarissa.saldo = 1200;

contaLarissa.depositar(1200);
contaLarissa.sacar(1500);

contaWilliam.transferir(1500, contaLarissa);
console.log(contaWilliam);
console.log(contaLarissa);

console.log(contaWilliam._cliente);
console.log(contaLarissa._cliente);
