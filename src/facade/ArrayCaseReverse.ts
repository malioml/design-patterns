class ArrayCaseReverse {
    private static uppercaseArray = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

    private static lowercaseArray = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]

    public static reverseCase(arrayIn: string[]) {
        return arrayIn.map((letter) => {
            if (this.uppercaseArray.indexOf(letter) > -1) {
                return this.lowercaseArray[this.uppercaseArray.indexOf(letter)]
            }

            if (this.lowercaseArray.indexOf(letter) > -1) {
                return this.uppercaseArray[this.lowercaseArray.indexOf(letter)]
            }

            return letter
        })
    }
}

export default ArrayCaseReverse
