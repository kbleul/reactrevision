
import { useTheme } from '../themeContext'


function SecondBox () {

     const theme = useTheme()

     const boxStyle = {
        color : theme === "light" ? "blue" : "brown",
        fontWeight: "bolder",
        backgroundColor: theme === "light" ? "black" : "white",
    }

    return (<article className="boxx" style={boxStyle}><p>Box Two</p></article>)
}

export default SecondBox

