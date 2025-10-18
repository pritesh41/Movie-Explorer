import react , {createContext, useContext} from 'react';
export const ThemeContext= createContext();
export const ThemeProvider = ThemeContext.Provider;
export const useTheme=() => useContext(ThemeContext);