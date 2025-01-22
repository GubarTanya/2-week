import { print } from '../print';
import { EButtonUsage } from "../../common/enum";

type CalculatorState = {
    result: number;
    currentInput: string;
    operator: string;
    temporaryMessage: string | null;
};

const plus = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const division = (a: number, b: number, updateState: (newState: Partial<CalculatorState>) => void): number => {
    if (b === 0) {
        updateState({ temporaryMessage: "делить на 0 нельзя!" });
        setTimeout(() => {
            updateState({ temporaryMessage: null });
        }, 2000);
        return a;
    }
    return a / b;
};
const multiplication = (a: number, b: number): number => a * b;

const calculate = (state: CalculatorState, updateState: (newState: Partial<CalculatorState>) => void): CalculatorState => {
    const inputNumber = parseFloat(state.currentInput);
    if (isNaN(inputNumber)) return state;

    let result: number;

    switch (state.operator) {
        case EButtonUsage.OPERATOR_ADD:
            result = plus(state.result, inputNumber);
            break;
        case EButtonUsage.OPERATOR_SUBTRACT:
            result = minus(state.result, inputNumber);
            break;
        case EButtonUsage.OPERATOR_DIVIDE:
            result = division(state.result, inputNumber, updateState);
            break;
        case EButtonUsage.OPERATOR_MULTIPLY:
            result = multiplication(state.result, inputNumber);
            break;
        default:
            result = inputNumber;
            break;
    }

    return {
        ...state,
        result,
        currentInput: '',
        operator: '',
    };
};

const main = () => {
    let calState: CalculatorState = {
        result: 0,
        currentInput: '',
        operator: '',
        temporaryMessage: null,
    };

    const updateState = (newState: Partial<CalculatorState>): void => {
        calState = { ...calState, ...newState };

        if (calState.temporaryMessage !== null) {
            print(calState.temporaryMessage);
        } else if (calState.currentInput !== '') {
            print(calState.currentInput);
        } else {
            print(calState.result.toString());
        }
    };

    const handleButtonPress = (state: EButtonUsage): void => {
        switch (state) {
            case EButtonUsage.OPERATOR_AC:
                calState = {
                    result: 0,
                    currentInput: '',
                    operator: '',
                    temporaryMessage: null,
                };
                updateState({});
                break;
            case EButtonUsage.OPERATOR_C:
                calState.currentInput = '';
                updateState({});
                break;
            case EButtonUsage.OPERATOR_EQUAL:
                const newState = calculate(calState, updateState);
                if (calState.temporaryMessage === null) {
                    calState = newState;
                    updateState({});
                }
                break;
            case EButtonUsage.OPERATOR_ADD:
            case EButtonUsage.OPERATOR_SUBTRACT:
            case EButtonUsage.OPERATOR_DIVIDE:
            case EButtonUsage.OPERATOR_MULTIPLY:
                if (calState.currentInput !== '') {
                    const newState = calculate(calState, updateState);
                    if (calState.temporaryMessage === null) {
                        calState = newState;
                        updateState({});
                    }
                }
                calState.operator = state;
                updateState({ operator: calState.operator });
                break;
            default:
                if (state === EButtonUsage.OPERATOR_DECIMAL && calState.currentInput.includes('.')) return;
                calState.currentInput += state;
                updateState({ currentInput: calState.currentInput });
                break;
        }
    };

    return handleButtonPress;
};

export { main };