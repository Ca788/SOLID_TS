import Cliente from "../entities/Cliente";
import { IClientRepository } from "./Interfaces/IClientRepository";

export default class InMemoryRepository implements IClientRepository {
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionaCliente(cliente: Cliente) {
        this.db.push(cliente);
    }

    listaClientes(): Cliente[] {
        return this.db;
    }
}