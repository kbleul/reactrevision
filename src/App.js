import ToggleBtns from "./toggleTheme";
import FirstBox from './components/firstbox'
import SecondBox from './components/secondbox'
import {useTheme} from './themeContext'



export default function App() {

  const theme = useTheme()

  const rootStyle = {
    backgroundColor: theme === "light" ? "blue" : "red",
    height : "100vh"
  }

  console.log(theme)

  return (
    <article style={rootStyle}>
        <div>React Revision : useContext</div>
        <ToggleBtns />
        <FirstBox />
        <SecondBox />
    </article>

  );
}




