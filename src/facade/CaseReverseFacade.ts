import ArrayCaseReverse from "./ArrayCaseReverse";
import ArrayStringFunctions from "./ArrayStringFuntions";

class CaseReverseFacade {
    public static reverseStringCase(stringIn: string) {
        const arrayFromString = ArrayStringFunctions.stringToArray(stringIn);
        const reversedCaseArray = ArrayCaseReverse.reverseCase(arrayFromString);
        const reversedCaseString = ArrayStringFunctions.arrayToString(reversedCaseArray);
        return reversedCaseString;
    }
}

export default CaseReverseFacade
