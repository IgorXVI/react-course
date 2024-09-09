function Main() {
  return (
    <div
      className="flex flex-col h-[100%] 
    dark:text-white items-center p-5 gap-12
    bg-gradient-to-b from-white to-react-bluesky
    dark:bg-gradient-to-b dark:from-react-black dark:to-react-lightgray"
    >
      <h1 className="text-3xl font-bold text-react-bluesky">
        Fun facts about React
      </h1>
      <ul
        className="list-inside list-disc flex flex-col 
      gap-8 text-lg ml-10 mr-10 text-justify"
      >
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Main
