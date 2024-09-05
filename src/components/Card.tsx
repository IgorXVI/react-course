export default function Card(props: {
    img: string,
    rating: string,
    reviewCount: number,
    country: string,
    title: string,
    price: number,
    isSoldOut: boolean
}) {
    return (
        <div className="p-5 flex flex-col gap-1 relative bg-gray-100 rounded-2xl m-2">
            <img src={props.img} alt="Wedding" className="h-auto w-64 rounded-2xl" />
            <p>⭐ {props.rating} <span className="text-gray-500">({props.reviewCount}) - {props.country}</span></p>
            <p>{props.title}</p>
            <p><span className="font-bold">From ${props.price}</span> / person</p>
            <p className="bg-gray-100 block absolute p-1 rounded-md font-bold top-7 left-8">
                {props.isSoldOut ? "SOLD OUT" : "ONLINE"}
            </p>
        </div>
    )
}