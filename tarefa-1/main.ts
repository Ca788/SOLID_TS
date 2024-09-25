
import { CalcularSalario } from "./CalcularSalario";
import Colaborador from "./Colaborador";
import { GerarRelatorio } from "./GerarRelatorio";
import { Pagamento } from "./Pagamento";
import QuadroColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";

const quadroColaboradores = new QuadroColaboradores();
const calcularSalario = new CalcularSalario();
const pagamento = new Pagamento(calcularSalario);
const relatorio = new GerarRelatorio(quadroColaboradores.colaboradores, calcularSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(relatorio.gerarRelatorioJSON());

console.log(colaborador1);
pagamento.pagaColaborador(colaborador1);
console.log(colaborador1);