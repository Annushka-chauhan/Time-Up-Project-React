import {useState} from 'react' ; 
export default function TimerChallenge({title, targetTime}) {
const [timerStarted, setTimerStarted] = useState(false);  
const [timerExpired, setTimerExpired] =useState(false);
function handleStart(){



  //GENERAL 
  //This setTimeOut  is used to set the timer in js in which the function is executed for the particular seconds as mentioned (1000) since targetTime is in sec we have to make it to miliseconds by multiplying by 1000
  //SetTimeOut means run this function after some delay say setTimeOut(() => { console.log("hello")},300) this means that Hello is printed in console after every 3 sec


  //Here the timer has started thats why we have updated setTimerStrted state as true 
  setTimerStarted(true);
  //Here whatever the target Time is after that the Time is expired thats why its set as true 
  setTimeout(()=> {
    setTimerExpired(true);
  } ,targetTime*1000);
}
//Here we have to stop soething which is happening above in the handleStart thats what how to get access to this (ref helps us)
function handleStop(){
   
}
  return (<section className = "challenge">
   <h2>{title}</h2>
   {timerExpired && <p>You Lost!</p>}
   <p className ="challenge-time">
   {targetTime} second{targetTime>1 ?'s' : ''}
   </p>
   <p>
    <button onClick = {handleStart}>
      {timerStarted ? 'Stop' : 'Start'} Challenge
    </button>
   </p>
   <p className ={timerStarted ? 'active' : undefined}>
    {timerStarted ? 'Time is Running ....' : 'TimerInactive'}
   </p>
  </section>
  );
}