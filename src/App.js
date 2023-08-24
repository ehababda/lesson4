import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddUser from "./components/AddUser";
import Is18 from "./components/ex6";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    function clickToLoad() {
        setIsLoading(false);
    }
    function addUser() {
        setShow(true);
    }
    return (
        <div className="App">
            {/* {isLoading ? <p>Loading....</p> : <p>loaded</p>}
            <button onClick={clickToLoad}>load</button>
            <button onClick={addUser}>add user</button>

        {show && <AddUser />}
        <Is18/> */}
        <WeatherDisplay />
        

      
      </div>
      
    );
}

export default App;