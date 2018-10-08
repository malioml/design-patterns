class Singleton {
    private static instance: Singleton
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            console.log('Singleton was created')
            Singleton.instance = new Singleton()
        } else {
            console.log('Singleton was retrieved')
        }
        return Singleton.instance
    }
}

export default Singleton
