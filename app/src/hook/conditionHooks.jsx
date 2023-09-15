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
    const[isClick,dispatch] = useReducer(conditionReducer,false);

    const toggleClick = () => {
        dispatch({type:'condition'})
    };
    return {isClick, toggleClick};
}
export default useConditionReducer;