import {useState,useRef } from 'react';
export default function Player() {
  const playerName = useRef();
   const [enteredPlayerName, setEnteredPlayer] = useState(null); 
  // const [submitted, setSubmitted] = useState(false);
  //  function handleChange(event){
  //   //we are setting here false as when we start typing again it must not change with each key stroke but is updaed wwith the unknown entity 
  //   setSubmitted(false);
  //   setEnteredPlayer(event.target.value)
  //  }
   function handleClick(){
  //  setSubmitted(true);
 setEnteredPlayer(playerName.current.value);
 playerName.current.value = ''; 
   }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName: 'unknown entity'}</h2>
      <p>
        <input
        // This input component here is connected to the ref 
         ref={playerName} 
         type="text"
         />
         {/* onChange= {handleChange} 
         value={enteredPlayerName}  */}
        <button onClick = {handleClick}>Set Name</button>
      </p>
    </section>
  );
}
