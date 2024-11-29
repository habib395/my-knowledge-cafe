import { useEffect, useState } from "react"
import Bookmarks from "./Bookmarks/Bookmarks"
import Cards from "./Cards/Cards"
import Navbar from "./Navbar/Navbar"


function App() {
  
  const [products, setProducts] = useState([])
  const [times, setTimes] = useState(0)

  useEffect(() =>{
    fetch('knowledge.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleBookmarks = (product) =>{
    const newBookMarks = [...products, product]
    setProducts(newBookMarks)
  }
 
  const handleReadTime = (time) =>{
    setTimes(times + time);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="flex w-10/12 mx-auto">
      <Cards products={products} handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Cards>
      <Bookmarks products={products} times={times}></Bookmarks>
      </div>
    </>
  )
}

export default App
