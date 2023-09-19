import React, {createContext,useState,useContext} from 'react';
import { set } from 'react-hook-form';

export const ThemeContext = createContext(null);
const ThemeContextProvider = ({children}) =>{
    const [theme,setTheme] = useState("light");
    return(
        <ThemeContextProvider value={{theme,setTheme}}>
            {children}
        </ThemeContextProvider>
    )
}
export default ThemeContextProvider;

export function useThemeContext(){
    const context = useContext(ThemeContext)
    if (context === undefined){
        throw new Error("Theme context should be used within ThemeContextProvider")
    }
    else{
        return context;
    }
}