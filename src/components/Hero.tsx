import heroImg from "../assets/hero.png"

export default function Hero() {
    return (
        <section className="flex flex-col gap-5 p-5 md:p-16">
            <img src={heroImg} alt="Mosaic" className="self-center md:pb-16 w-auto" />
            <h1 className="text-5xl font-bold">Online Experiences</h1>
            <p className="text-2xl text-gray-500">
                Join unique interactive activities led by
                one-of-a-kind hosts-all whithout leaving home.
            </p>
        </section>
    )
}