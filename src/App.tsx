import reactLogo from './assets/react.svg'
import ListItemFacts from './components/ListItemFacts'

function App() {
  return (
    <div className="flex flex-col items-center p-3 gap-3 font-sans bg-gradient-to-r from-[#33373E] to-black h-[100vh] w-[100vw] text-white">
      <img src={reactLogo} alt="React Logo" width={200} height={200} className='animate-spin-slow mt-10 mb-10' />
      <h1 className='font-bold text-5xl mb-10 text-[#61DAFB]'>Fun facts about React</h1>
      <ul className='flex flex-col gap-5 text-2xl'>
        <ListItemFacts text="Was first released in 2013"></ListItemFacts>
        <ListItemFacts text="Was originally created by Jordan Walke"></ListItemFacts>
        <ListItemFacts text="Has well over 100K stars on Github"></ListItemFacts>
        <ListItemFacts text="Is maintained by Facebook"></ListItemFacts>
        <ListItemFacts text="Powers thousands of enterprise apps, including mobile apps"></ListItemFacts>
      </ul >
    </div >
  )
}

export default App
