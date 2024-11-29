import Bookmarks from "./Bookmarks/Bookmarks"
import Cards from "./Cards/Cards"
import Navbar from "./Navbar/Navbar"


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className="flex w-10/12 mx-auto">
      <Cards></Cards>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
