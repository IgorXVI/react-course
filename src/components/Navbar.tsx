import trollface from "../assets/trollface.svg"

export default function Navbar() {
    return (
        <nav className="
                flex 
                flex-row 
                p-5
                md:pl-[5vw]
                md:pr-[5vw]
                gap-3 
                bg-gradient-to-r 
                from-meme-darkpurple 
                to-meme-purple 
                text-white 
                items-center
            ">
            <img src={trollface} alt="React Logo" className="h-8" />
            <p className="font-bold mr-auto text-lg">Meme Generator</p>
            <p className="text-sm">React Course - Project 3</p>
        </nav>
    )
}