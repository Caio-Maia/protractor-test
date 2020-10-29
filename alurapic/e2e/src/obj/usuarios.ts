export class Usuarios {

    userName: string;
    password: string;
    email: string;
    fullName: string;

    constructor(userName, password, email, nome) {
        this.userName = userName;
        this.password = password;
        this.fullName = nome;
        this.email = email;
    }
}