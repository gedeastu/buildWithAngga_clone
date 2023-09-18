import React from 'react'
import { createContext,useState,useEffect, useContext } from "react";

const TheContext = createContext();
export const StateProvider = ({children,value}) => {
    const [state, setState] = useState(()=>{
    const localStorageValue = localStorage.getItem('state');
    return localStorageValue ? JSON.parse(localStorageValue) : {value};
    });
    useEffect(()=>{
        localStorage.setItem(state, JSON.stringify(state))
    },[state])
    return(
        <TheContext.Provider value={{state,setState,value}}>
            {children}
        </TheContext.Provider>
    )
}
export const useStateContext = () => {
    const context = useContext(TheContext)
    if(context === undefined){
        throw new Error("GlobalStateContext was used of the GlobalStateProvider")
    }else{
        return context
    }
}