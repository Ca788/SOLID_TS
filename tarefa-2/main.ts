{
    interface ContratoRemuneracao {
        titulo: string;
        calcularSalarioMensal(): number;
    }

    const MES_COMERCIAL = 20;

    class ContratoClt implements ContratoRemuneracao {
        private GANHO_POR_HORA_CLT = 24;
        private CARGA_HORARIA_DIARIA_CLT = 8;
        titulo: string = 'CLT';
        calcularSalarioMensal(): number {
            return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
        }
    }

    class Estagio implements ContratoRemuneracao {
        private GANHO_POR_HORA_ESTAGIARIO = 14;
        private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
        titulo: string = 'Estágio';
        calcularSalarioMensal(): number {
            return this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO;
        }
    }

    class contratoPJ implements ContratoRemuneracao {
        private GANHO_POR_HORA_PJ = 30;
        private CARGA_HORARIA_DIARIA_PJ = 8;
        titulo: string = 'PJ';
        calcularSalarioMensal(): number {
            return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
        }
    }

    class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoRemuneracao): number {
            return funcionario.calcularSalarioMensal() * MES_COMERCIAL
        }
    }

    const funcionarioClt = new ContratoClt();
    const funcionarioEstagiario = new Estagio();
    const funcionarioPj = new contratoPJ();

    console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
    console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
    console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
}