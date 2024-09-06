import TextInput from "./TextInput"
import reactLogo from "../assets/trollface.svg"

export default function Main() {
  return (
    <main className="flex flex-col min-h-[90vh] md:mr-[15vw] md:ml-[15vw] mt-5">
      <form
        action=""
        className="grid md:grid-cols-2 grid-cols-1 gap-6 m-2"
      >
        <div className="col-span-1">
          <TextInput
            id="topTextInput"
            label="Top text"
            placeholder="Shut up"
          ></TextInput>
        </div>
        <div className="col-span-1">
          <TextInput
            id="bottomTextInput"
            label="Bottom text"
            placeholder="And take my money"
          ></TextInput>
        </div>
      </form>
      <div className="flex flex-col gap-20 mt-10">
        <button
          type="button"
          className="focus:outline-none text-white from-meme-darkpurple 
          to-meme-purple bg-gradient-to-r focus:ring-4 focus:ring-purple-300 
          hover:ring-4 hover:ring-purple-300 rounded-md text-xl font-bold p-5 m-2 mb-auto"
        >
          Get a new meme image
        </button>
        <img
          src={reactLogo}
          alt="Meme"
          className="w-[800px] h-auto max-w-[80vw] self-center border border-gray-500 p-5 m-5"
        />
      </div>
    </main>
  )
}
