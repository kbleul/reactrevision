
import { useTheme } from '../themeContext'


function FirstBox () {

     const theme = useTheme()

     const boxStyle = {
         color : theme === "light" ? "brown" : "black",
         fontWeight: "bolder",
         backgroundColor: theme === "light" ? "gray" : "white",
     }

    return (<article className="boxx" style={boxStyle}><p>Box One</p></article>)
}

export default FirstBox