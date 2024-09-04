import elipse from "../assets/elipse.svg"

function ListItemFacts({ text }: { text: string }) {
    return <li className="flex flex-row gap-5">
        <img src={elipse} alt="Item Marker" className="h-4 self-center" />
        <span>{text}</span>
    </li>
}

export default ListItemFacts