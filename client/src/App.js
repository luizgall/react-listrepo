import './App.css';
import { useState } from "react";

function App() {

  const [ userName, setUserName ] = useState("");

  const searchUser = () => {
    console.log(userName);

    // call API to get user info 

    //
  }

  return <div className="App">

    <section className="searchBar">
      <input type = "text" placeholder="enter username" onChange={(event) => {
        setUserName(event.target.value)
        }}>
      </input>
      <button onClick = {searchUser}>search</button>
    </section>
  </div>;
}

export default App;
