import { ChangeEventHandler } from "react"
import reactLogo from "../assets/react.svg"

function Navbar(props: { toggleIsDark: ChangeEventHandler; isDark: boolean }) {
  return (
    <div
      className="flex flex-row justify-center p-5 dark:bg-react-black 
    dark:border-b dark:border-react-black"
    >
      <div className="flex flex-row mr-auto gap-2">
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-10"
        />
        <p className="text-react-bluesky font-extrabold text-2xl">ReactFacts</p>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={props.isDark}
          className="sr-only peer"
          onChange={props.toggleIsDark}
        />
        <div
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none 
          peer-focus:ring-4 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-full 
          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          peer-checked:bg-react-blue"
        ></div>
        <span className="ms-3 text-sm font-medium dark:text-white">
          Dark mode
        </span>
      </label>
    </div>
  )
}

export default Navbar
