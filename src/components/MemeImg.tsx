export default function MemeImg(props: {
  topText: string
  bottomText: string
  randomImg: string
}) {
  return (
    <div className="relative flex flex-col">
      <img
        src={props.randomImg}
        alt="Meme"
        className="max-w-[100%] min-w-[50%] rounded-md self-center"
      />
      <p
        className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] pt-2
      md:text-6xl text-3xl text-white lett tracking-tighter text-shadow-solid shadow-black top-0"
      >
        {props.topText.toUpperCase()}
      </p>
      <p
        className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] pb-2
      md:text-6xl text-3xl text-white lett tracking-tighter text-shadow-solid shadow-black bottom-0"
      >
        {props.bottomText.toUpperCase()}
      </p>
    </div>
  )
}
