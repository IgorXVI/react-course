import { useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleIsDark = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={`h-[100vh] font-sans ${isDark ? "dark" : ""}`}>
      <div className="dark:bg-react-black h-[100%]">
        <Navbar
          toggleIsDark={toggleIsDark}
          isDark={isDark}
        ></Navbar>
        <Main></Main>
      </div>
    </div>
  )
}

export default App
