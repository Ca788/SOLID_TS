import { CalcularSalario } from "./CalcularSalario";
import Colaborador from "./Colaborador";


export class GerarRelatorio {
    constructor(private _colaboradores: Colaborador[],
        private servicoCalcularSalario: CalcularSalario
    ) { }

    gerarRelatorioJSON() {
        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.servicoCalcularSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}