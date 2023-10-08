const banco = {
    conta: 12398 ,
    tipoconta: 'corrente',
    saldo: 1500,
    agencia: 'Agência C',

    buscarsaldo: function(){
        return this.saldo;
    },

    deposito: function(valor){
        if(valor > 0){
            this.saldo += valor
            return ` Depósito de R$ ${valor} realizado com sucesso. Saldo atual de R$ ${this.saldo}`;
        } else{
            return `Valor inválido para depósito`;
        }
    },

    saque: function(valor){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            return `Saque no valor de R$ ${valor} realizado com sucesso. Saldo atual de R$ ${this.saldo}`;
        } else {
            return `Saldo para saque insuficiente.`
        }
    },

    numeroconta: function(){
        return this.conta
    },

};

console.log('Saldo atual R$' + banco.buscarsaldo());
console.log('Número da conta:' + banco.numeroconta());
console.log(banco.deposito(1000));
console.log(banco.saque(50));