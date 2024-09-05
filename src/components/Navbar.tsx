import airbnbLogo from "../assets/airbnb_logo.svg"

export default function Navbar() {
    return (
        <nav className="flex flex-row p-5 items-center bg-white border-b-8 border-gray-200 shadow-gray-200 shadow-lg">
            <img src={airbnbLogo} alt="React Logo" className="h-10" />
        </nav>
    )
}