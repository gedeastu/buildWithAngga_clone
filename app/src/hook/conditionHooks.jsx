import { useReducer } from "react";

const conditionReducer  = (state,action) => {
    switch (action.type) {
        case "condition" :
            return !state;
        default:
            return state;
    }
}
const useConditionReducer = ()=>{
    const[isOn,dispatch] = useReducer(conditionReducer,false);

    const toggleClick = () => {
        dispatch({type:'condition'})
    };
    return {isOn, toggleClick};
}
export default useConditionReducer;