import { CalcularSalario } from "./CalcularSalario";
import Colaborador from "./Colaborador";


export class Pagamento {
    constructor(private servicoCalcularSalario: CalcularSalario) { }

    pagaColaborador(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalcularSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}