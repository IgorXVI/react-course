import TextInput from "./TextInput"
import reactLogo from "../assets/react.svg"
import { FormEvent, MouseEventHandler, useState } from "react"
import memeData from "../assets/memeData.json"
import MemeImg from "./MemeImg"

export default function Main() {
  const [allMemesData /*setAllMemesData*/] = useState(memeData.data.memes)

  const [meme, setMeme] = useState({
    topText: "Top text",
    bottomText: "Bottom text",
    randomImg: reactLogo,
  })

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault()

    const randomNumber = Math.floor(Math.random() * allMemesData.length)

    const randomMeme = allMemesData[randomNumber]

    setMeme((prev) => ({ ...prev, randomImg: randomMeme.url }))
  }

  const handleInput = (attr: string) => (event: FormEvent) =>
    setMeme((prev) => ({
      ...prev,
      [attr]: (event.target as HTMLInputElement).value,
    }))

  return (
    <main className="flex flex-col min-h-[90vh] md:mr-[15vw] md:ml-[15vw] mt-5">
      <form
        action=""
        className="grid md:grid-cols-2 grid-cols-1 gap-6 m-3"
      >
        <div className="md:col-span-1">
          <TextInput
            id="topTextInput"
            label="Top text"
            value={meme.topText}
            onInput={handleInput("topText")}
          ></TextInput>
        </div>
        <div className="md:col-span-1">
          <TextInput
            id="bottomTextInput"
            label="Bottom text"
            value={meme.bottomText}
            onInput={handleInput("bottomText")}
          ></TextInput>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="focus:outline-none text-white from-meme-darkpurple 
          to-meme-purple bg-gradient-to-r focus:ring-4 focus:ring-purple-300 
          hover:ring-4 hover:ring-purple-300 rounded-md text-xl font-bold p-5
          md:col-span-2"
        >
          Get a new meme image
        </button>
      </form>
      <MemeImg {...meme}></MemeImg>
    </main>
  )
}
