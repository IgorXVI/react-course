export default function MemeImg(props: {
  topText: string
  bottomText: string
  randomImg: string
}) {
  return (
    <div
      className="border border-gray-500 p-5 m-5 flex flex-col items-center
    text-black text-4xl font-extrabold font-mono"
    >
      <p>{props.topText}</p>
      <img
        src={props.randomImg}
        alt="Meme"
        className="w-[500px] h-[500px] max-w-[90vw] max-h-[90vh]"
      />
      <p>{props.bottomText}</p>
    </div>
  )
}
