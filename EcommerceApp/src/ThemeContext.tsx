import React, { createContext, useContext, useMemo } from 'react'
import { useColorScheme, ViewStyle, TextStyle, ColorValue } from 'react-native'

type ThemeContextType = {
    background: ColorValue;
    text: ColorValue;
    card: ColorValue;
    image:ColorValue;
    lineThroughText: TextStyle; // Style for line-through text
  };
  
  const lightTheme: ThemeContextType = {
    background: 'white',
    text: 'black',
    card: '#f0f0f0',
    image:'#FFFFFF',
    lineThroughText: {
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
  };
  const darkTheme: ThemeContextType = {
    background: 'black',
    text: 'white',
    card: '#333',
    image: "black",
    lineThroughText: {
      color: 'rgba(255, 255, 255, 0.5)', // Correct color for dark mode
      textDecorationLine: 'line-through',
    },
  };
  
const ThemeContext = createContext<ThemeContextType>(lightTheme)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme()
  const theme = useMemo(() => (scheme === 'dark' ? darkTheme : lightTheme), [scheme])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
