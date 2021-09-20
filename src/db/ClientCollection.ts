import firebase from '../firebase/config'
import ClientRepository from "../core/ClientRepository";
import Client from "../model/Client";

export default class ClientCollection implements ClientRepository {

    converter = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.DocumentData , options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot.data(options)
            return new Client(data.name, data.age, snapshot.id)
        }

    }

    async saveClient(client: Client): Promise<Client> {
        if(client?.id){
                await this.coletion().doc(client.id).set(client)
                return client
        } else {
            const docRef = await this.coletion().add(client)
            const doc = await docRef.get()
            return doc.data() ?? Client.void()
        }
    }

    async deleteClient(client: Client): Promise<void> {
        return this.coletion().doc(client.id ?? '').delete()
    }

    async getAllClients(): Promise<Client[]> {
        const query = await this.coletion().get()
        return query.docs.map((doc: any) => doc.data()) ?? []
    }

    private coletion(){
        return firebase.firestore().collection('clients').withConverter(this.converter)
    }
}