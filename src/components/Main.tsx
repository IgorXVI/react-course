import LiFact from "./LiFact"

export default function Main() {
    return (
        <main className="bg-react-lightgray text-white flex flex-col items-center h-[100vh]">
            <h1 className="text-5xl p-16 font-bold">Fun Facts about React</h1>
            <ul className="text-3xl flex flex-col gap-4">
                <LiFact text="Was first released in 2013"></LiFact>
                <LiFact text="Was originally created by Jordan Walke"></LiFact>
                <LiFact text="Has well over 200k stars on GitHub"></LiFact>
                <LiFact text="Is maintained by Meta"></LiFact>
                <LiFact text="Powers thousands of enterprise apps, including mobile apps"></LiFact>
            </ul>
        </main>
    )
}