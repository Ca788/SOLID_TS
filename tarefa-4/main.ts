interface Pagamento {
    valor: number;
    pagar(): void;
}

class PagamentoCheque implements Pagamento {
    valor: number;
    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`Pagamento de R$${this.valor} realizado por cheque`);
    }
}

class PagamentoDinheiro implements Pagamento {
    valor: number;
    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`Pagamento de R$${this.valor} realizado em dinheiro`);
    }
}

class PagamentoPix implements Pagamento {
    valor: number;
    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`Pagamento de R$${this.valor} realizado por pix`);
    }
}

class PagamentoBoleto implements Pagamento {
    valor: number;
    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`Pagamento de R$${this.valor} realizado por boleto`);
    }
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoPix = new PagamentoPix(300);
pagamentoPix.pagar();

const pagamentoBoleto = new PagamentoBoleto(500);
pagamentoBoleto.pagar();

