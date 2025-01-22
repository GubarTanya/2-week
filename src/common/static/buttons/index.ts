import {EButtonUsage} from "../../enum";

const arrayButtons = [
        {class:'button-action', value: EButtonUsage.OPERATOR_AC},
        {class:'button-full button-action col-start-2 col-end-4', value: EButtonUsage.OPERATOR_C},
        {class:'button button-action', value: EButtonUsage.OPERATOR_DIVIDE},
        {value: EButtonUsage.BUTTON_7},
        {value: EButtonUsage.BUTTON_8},
        {value: EButtonUsage.BUTTON_9},
    {class:'button button-action', value: EButtonUsage.OPERATOR_MULTIPLY},
        {value: EButtonUsage.BUTTON_4},
        {value: EButtonUsage.BUTTON_5},
        {value: EButtonUsage.BUTTON_6},
    {class:'button button-action', value: EButtonUsage.OPERATOR_SUBTRACT},
        {value: EButtonUsage.BUTTON_1},
        {value: EButtonUsage.BUTTON_2},
        {value: EButtonUsage.BUTTON_3},
    {class:'button-action', value: EButtonUsage.OPERATOR_ADD},
    {class:'button-full col-start-1 col-end-3', value: EButtonUsage.BUTTON_0},
    {value: EButtonUsage.OPERATOR_EQUAL},
    {class:'button-action', value: EButtonUsage.OPERATOR_DECIMAL},
]
export default arrayButtons
