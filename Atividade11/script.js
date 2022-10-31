/*class Retangulo{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    calcArea(){
        return this.x * this.y;
    }
}

objRetangulo = new Retangulo(15,5);
alert(objRetangulo.calcArea());*/

class Conta{
    //nome correntista, banco, numero da conta e saldo
    constructor(){
        this.nome;
        this.banco;
        this.nConta;
        this.saldo;
    }

    get Nome(){
        return this.nome;
    }
    set Nome(_nome){
        this._nome = _nome;
    }

    get Banco(){
        return this.banco;
    }
    set Banco(_banco){
        this._banco = _banco;
    }

    get NumCont(){
        return this.nConta;
    }
    set NumCont(nConta){
        this.nConta = nConta;
    }

    get Saldo(){
        return this.saldo;
    }
    set Saldo(_saldo){
        this._saldo = _saldo;
    }
}

class Corrente extends Conta{
    //Saldo Especial e Poupanca com Juros, Data Vencimento.
    constructor(){
        super();
        this.saldoEspecial;
    }
    
    get SaldoEspc(){
        return this.saldoEspecial;
    }
    set SaldoEspc(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this._Juros;
        this.dataVenc;
    }

    get Juros(){
        return this._Juros;
    }
    set Juros(_Juros){
        this._Juros = _Juros;
    }

    get DataV(){
        return this.dataVenc;
    }
    set DataV(dataVenc){
        this.dataVenc = dataVenc;
    }
}

objCorrente = new Corrente();
objCorrente.nome = "Bruno"
objCorrente.banco = "Banco do Brasil"
objCorrente.nConta = 1212
objCorrente.saldo = 1500
objCorrente.saldoEspecial = 100;

objPoupanca = new Poupanca();
objPoupanca.nome = "Juquinha"
objPoupanca.banco = "NU Bank"
objPoupanca.nConta = 2121
objPoupanca.saldo = 5000
objPoupanca.Juros = "10%";
objPoupanca.DataV = "01/06/2021";
const date = new Date(objPoupanca.DataV);

alert("Correntista: \nNome: " + objCorrente.nome + "\nBanco: " + objCorrente.Banco + 
    "\nNúmero da Conta: " + objCorrente.nConta + "\nSaldo: " + objCorrente.Saldo + 
    "\nSaldo Especial: " + objCorrente.saldoEspecial)

alert("Poupança: \nNome: " + objPoupanca.nome + "\nBanco: " + objPoupanca.Banco + 
"\nNúmero da Conta: " + objPoupanca.nConta + "\nSaldo: " + objPoupanca.Saldo + 
"\nJuros: " + objPoupanca.Juros + "\nData de Vencimento: " + objPoupanca.DataV)