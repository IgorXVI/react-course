import blueElipse from "../assets/elipse.svg"

export default function LiFact({ text }: { text: string }) {
    return (
        <li className="flex flex-row gap-5 items-center"><img src={blueElipse} alt="Item Marker" className="h-4" />{text}</li>
    )
}