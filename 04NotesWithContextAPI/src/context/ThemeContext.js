import { useContext, createContext } from "react";

export const NotesThemeContext = createContext({
    themeMode: 'dark',
    darkMode: () => {},
    lightMode: () => {},
})


export const NotesThemeContextProvider = NotesThemeContext.Provider;

export default function useTheme(){
    return useContext(NotesThemeContext);
}