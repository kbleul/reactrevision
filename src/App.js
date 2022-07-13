import ToggleBtns from "./toggleTheme";
import FirstBox from './components/firstbox'
import SecondBox from './components/secondbox'
import Refs from './components/refs'
import {useTheme} from './themeContext'
import {useState} from "react"



export default function App() {

  const [currentpage , set_currentpage] = useState("home")

  const theme = useTheme()

  const rootStyle = {
    backgroundColor: theme === "light" ? "blue" : "red",
    height : "100vh"
  }

  console.log(theme)

  return (<main>
    {currentpage === "home" && <article style={rootStyle}>
        <div>React Revision : useContext</div>
        <ToggleBtns />
        <button onClick={() => set_currentpage("ref")}>refs</button>
        <FirstBox />
        <SecondBox />
    </article>
   }

   {currentpage === "ref" && <article>
   <Refs />
   </article>}
   </main>
  );
}




