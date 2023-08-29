"use client"
import { type } from 'os';
import React from 'react'
import { useReducer } from 'react'

// type hook ={
//   state : boolean
//   action : 'TO'
// }
const initialState = {
    value : false,
};
const reducer = (state,action)=>{
    switch (action.type) {
        case 'TOGGLE':
          return {
            ...state,
            value : !state.value
          }
        default:
          return state.value
    }
};
const useToggle = () =>{
  const [{value},dispatch] = useReducer(reducer, initialState);
  const toggle = () => {
    dispatch({type: 'TOGGLE',})
  }
  return {value,toggle}
}
export default useToggle;

