import Record from "./Record";

class User extends Record {
    name: string

    beforeSave(): void {
        console.log('before save user')
    }

    afterSave(): void {
        console.log('afterSave save user')
    }

    setName(name: string): void {
        this.name = name
    }
}

export default User
