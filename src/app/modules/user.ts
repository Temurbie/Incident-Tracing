export class User {
    name: string;
    password: string;

    constructor() {
        this.name = "",
            this.password = ""
    }
}

export interface APIresponse {
    Message: string,
    result: boolean,
    data: any
}