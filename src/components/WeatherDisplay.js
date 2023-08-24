import React from "react";
import { useState } from "react";
export default function WeatherDisplay() {
    // המטרה להציג הודעה בהתאם לבחירה
    //phase 1 - hooks  , let , const
    const [selectWeather, setSelectWeather] = useState("sunny");
    //phase 2 - functions
    function handleSelectWeather(event) {
        console.log(event.target);
        setSelectWeather(event.target.value);
    }
    const message = ["today is sunny day",
        "today is raining",
        "today is snowing"];
    //phase 3 - return js
    return (
        <div>
            <h2>List of weathers</h2>
            <form>
                <label>
                    choose weather
                    <select onChange={handleSelectWeather}>
                        <option value="sunny">sunny</option>
                        <option value="raining">raining</option>
                        <option value="snowing">snowing</option>
                        
                    </select>
                </label>
            </form>
            <p>{selectWeather}</p>
            {selectWeather === "sunny" ? <p>{message[0]}</p> :
                (selectWeather === "raining" ?
                    <p>{message[1]}</p> :
                    <p>{message[2]}</p>)  }
        </div>
    );
}