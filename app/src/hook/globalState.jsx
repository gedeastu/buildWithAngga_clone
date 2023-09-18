import { createContext,useState,useEffect, useContext } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({children}) => {
  const [globalState,setGlobalState] = useState({
    value: 'Masuk',
    url: 'signIn'
  })

  useEffect(() => {
    const storedState = localStorage.getItem(globalState);
    if(storedState){
        setGlobalState(JSON.parse(storedState));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('globalState',JSON.stringify(globalState));
  },[globalState])

  const updateGlobalState = (newState) => {
    setGlobalState({...globalState,...newState});
  }
  return (
    <GlobalStateContext.Provider value={{globalState,updateGlobalState}}>
        {children}
    </GlobalStateContext.Provider>
  )
}

const useStateGlobal = () => {
    const context = useContext(GlobalStateContext)
    if(context === undefined){
        throw new Error("GlobalStateContext was used of the GlobalStateProvider")
    }else{
        return context
    }
}
export {useStateGlobal,GlobalStateProvider}