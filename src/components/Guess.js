import { useState } from "react";
import "./Guess.css";
import Result from "./Result"

const secretNumber=Math.floor(Math.random() * 100) + 1;

export default function Guess() {

    const [guess,setGuess]=useState();

    const handlechange= (ev)=> {
        setGuess(ev.target.value);
    }
  return (
    <>
      <h1>MINI REACT GAME</h1>
      <div className="container">
        <div className="head">
            {/* label input kela irukunu soldrathu htmlfor la id ya mention pannanum */}
            <label htmlFor="guess">
                Guess the Number between ( 1 to 100 ) 
            </label>
        </div>
        <input
          id="guess" type="text" name="guess" onChange={handlechange}
        />
      <Result guess={guess}  secretNumber={secretNumber}/>
      </div>
    </>
  );
}

