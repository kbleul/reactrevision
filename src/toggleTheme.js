
import { useTheme, useUpdateTheme } from './themeContext'

export default function ToggleBtns () {
        const theme = useTheme()
        const themeUpdater = useUpdateTheme()

    const toogleTheme = () => {
        theme === "light" ? themeUpdater("dark") : themeUpdater("light")
    }

    return (<button onClick={toogleTheme}>{theme === "light" ? <span>Go dark</span> 
            : <span>Go light</span>}</button>)
}