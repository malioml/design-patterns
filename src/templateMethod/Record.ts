abstract class Record {
    save():void {
        this.beforeSave()
        console.log('save to db regardless what kind of element is saving')
        this.afterSave()
    }

    abstract beforeSave(): void
    abstract afterSave(): void
}

export default Record
