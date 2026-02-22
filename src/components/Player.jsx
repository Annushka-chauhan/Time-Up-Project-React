import {useState} from 'react';
export default function Player() {

   const [enteredPlayerName, setEnteredPlayer] = useState(''); 
   const [submitted, setSubmitted] = useState(false);
   function handleChange(event){
    //we are setting here false as when we start typing again it must not change with each key stroke but is updaed wwith the unknown entity 
    setSubmitted(false);
    setEnteredPlayer(event.target.value)
   }
   function handleClick(){
   setSubmitted(true);
   }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange= {handleChange} value={enteredPlayerName} />
        <button onClick = {handleClick}>Set Name</button>
      </p>
    </section>
  );
}
