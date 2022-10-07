class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}

class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

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

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        else {
            console.log("Saldo insuficinete");
        }
    }

    depositar(valor){
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}


const cliente1 = new Cliente("William", 37490547890);

const cliente2 = new Cliente("Larissa", 93652433468);

const contaWilliam = new ContaCorrente(cliente1, 6098);

contaWilliam.depositar(1200);
contaWilliam.sacar(600);

const contaLarissa = new ContaCorrente(cliente2, 4562);

let valor = 500;
contaWilliam.transferir(valor, contaLarissa);

contaLarissa.sacar(400);

console.log(contaWilliam);
console.log(contaLarissa);