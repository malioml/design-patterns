class ArrayStringFunctions {
    public static arrayToString(arrayIn: string[]) {
        return arrayIn.join('')
    }

    public static stringToArray(stringIn: string) {
        return stringIn.split('')
    }
}

export default ArrayStringFunctions
