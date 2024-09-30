import Cliente from "../entities/Cliente";
import { IClientRepository } from "../repositories/Interfaces/IClientRepository";

export default class ClienteController {
    constructor(private repository: IClientRepository) {
        this.repository = repository;
    }

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}