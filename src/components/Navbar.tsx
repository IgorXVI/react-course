import reactLogo from "../assets/react.svg"

export default function Navbar() {
    return (
        <nav className="flex flex-row p-10 items-center bg-react-black">
            <img src={reactLogo} alt="React Logo" className="h-16 animate-spin-slow" />
            <span className="font-bold text-react-blue ml-4 mr-auto text-5xl animate-bounce">ReactFacts</span>
            <span className="font-bold text-white text-3xl">React Course - Project 1</span>
        </nav>
    )
}