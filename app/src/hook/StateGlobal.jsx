import React, {createContext,useContext,useEffect,useState} from 'react';

const Context = createContext();

export const thisContextProvider = ({children}) => {
    const [data,setData] = useState(()=>{
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : {textContent:'Masuk',url:'/signIn'};
    });
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data));
    },[data])
    return(
        <Context.Provider value={{data,setData}}>
            {children}
        </Context.Provider>
    )
}

 export const useThisContext = () => {
    return useContext(Context);
 }