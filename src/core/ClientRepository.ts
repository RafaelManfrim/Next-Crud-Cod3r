import Client from "../model/Client";

export default interface ClientRepository {
    saveClient(client: Client): Promise<Client>
    deleteClient(client: Client): Promise<void>
    getAllClients(): Promise<Client[]>
}