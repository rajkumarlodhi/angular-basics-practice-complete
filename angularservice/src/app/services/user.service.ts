import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()

export class UserService {
    users = [
        { name: 'Raj', status: 'Active' },
        { name: 'Anu', status: 'Active' },
        { name: 'Diggu', status: 'Active' },
        { name: 'Sourabh', status: 'Active' },
    ]
    constructor(private logService: LogService) { }
    statusUpdated = new EventEmitter<string>();

    addUser(name: string, status: string) {
        this.users.push({ name, status });
        // this.logService.userLog(status);
    }
    updateStatus(id: number, status: string) {
        this.users[id].status = status;
        // this.logService.userLog(status);
        this.statusUpdated.emit(status);
    }
}