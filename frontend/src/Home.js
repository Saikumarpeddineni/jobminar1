import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="App">
      <div className="header">
        <div>
          <h1>Home</h1>
        </div>
        <div>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
    )
}