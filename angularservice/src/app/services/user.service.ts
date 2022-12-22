export class UserService {
    users = [
        { name: 'Raj', status: 'Active' },
        { name: 'Anu', status: 'Active' },
        { name: 'Diggu', status: 'Active' },
        { name: 'Sourabh', status: 'Active' },
    ]

    addUser(name: string, status: string) {
        this.users.push({ name, status });
    }
    updateStatus(id: number, status: string) {
        this.users[id].status = status;
    }
}