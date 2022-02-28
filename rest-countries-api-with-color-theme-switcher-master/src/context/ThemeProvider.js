import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
