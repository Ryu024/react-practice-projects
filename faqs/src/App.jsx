import { useState } from "react"

function App() {
  const [isOpen , setOpen] = useState(false)
  return (
    <>
    <div> 
      <p>Hello word</p>
      <p onClick={()=> setOpen((e)=> !e)}>{isOpen ? "-" : "+"}</p> 
      {isOpen && <p> My name is ayush anand</p>}
      </div> 

      
    </>
  )
}

export default App
