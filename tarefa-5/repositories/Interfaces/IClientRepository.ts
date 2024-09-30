import Cliente from "../../entities/Cliente";

export interface IClientRepository {
    adicionaCliente(cliente: Cliente): void;
    listaClientes(): Cliente[];
}