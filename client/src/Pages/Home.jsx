import { useState } from "react"

function Home() {

  const initialState = {
    first_name: "",
    gender: "",
  }

  const [formState, setFormState] = useState(initialState)
  return <div className="Home">
    <h1>Page is loading</h1>
  </div>
}

export default Home