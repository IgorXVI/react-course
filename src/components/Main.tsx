import Hero from "./Hero"
import Card from "./Card"

import weddingImg from "../assets/wedding-photography.png"
import swimmerImg from "../assets/swimmer.png"
import bikeImg from "../assets/mountain-bike.png"

const arr = [
    {
        img: weddingImg,
        country: "USA",
        isSoldOut: false,
        price: 125,
        rating: "5.0",
        reviewCount: 30,
        title: "Learn wedding photography"
    },
    {
        img: swimmerImg,
        country: "USA",
        isSoldOut: true,
        price: 139,
        rating: "5.0",
        reviewCount: 6,
        title: "Life lessons with Katie Zaferes"
    },
    {
        img: bikeImg,
        country: "USA",
        isSoldOut: false,
        price: 52,
        rating: "4.8",
        reviewCount: 2,
        title: "Group Mountain Biking"
    }
]

export default function Main() {
    return (
        <main className="flex flex-col items-center">
            <Hero></Hero>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {arr.map(el => <Card {...el}></Card>)}
            </div>
        </main>
    )
}