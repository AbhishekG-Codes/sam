import { useState } from "react"
import axios from "axios"
export default function App() {
  const [user,setUser] = useState("abhishek");
 async function handleClick() {
  const response = await axios.get("http://localhost:3000/")
  setUser(response.data)
}
  return (
    <div>
      <button onClick={handleClick}>click here</button>
      <h1>{user}</h1>
    </div>
  )
}
