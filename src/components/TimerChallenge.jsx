//KKKB
//Here for the handleStop we have used ref and not a variable as when we do changes for 2 or more challenges like when i start 1 and then start second this will be overriden and the more time challenge will be lost due to this behaviour when i declare timer which is used as a pointer to store the value and then clear it up *refs is used in the order to resolve this that is to manage any kind of value(.current is used with any ref as this refer to that current element )


import {useState, useRef} from 'react' ; 
import ResultModal from './ResultModal';
//let timer ;
export default function TimerChallenge({title, targetTime}) {
 const timer= useRef();
 const dialog =useRef(); 
 const [timeRemaining , setTimeRemaining] =useState(targetTime*1000);
// const [timerStarted, setTimerStarted] = useState(false);  
// const [timerExpired, setTimerExpired] =useState(false);
const timerIsActive =timeRemaining > 0 && timeRemaining< targetTime*1000;

if(timeRemaining<=0){
  clearInterval(timer.current);
  
  dialog.current.open();
}
function handleReset(){
  setTimeRemaining(targetTime*1000);
}
function handleStart(){
  //GENERAL 
  //This setTimeOut  is used to set the timer in js in which the function is executed for the particular seconds as mentioned (1000) since targetTime is in sec we have to make it to miliseconds by multiplying by 1000
  //SetTimeOut means run this function after some delay say setTimeOut(() => { console.log("hello")},300) this means that Hello is printed in console after every 3 sec


  //Here the timer has started thats why we have updated setTimerStrted state as true 
  // setTimerStarted(true);


  //Here whatever the target Time is after that the Time is expired thats why its set as true 
    timer.current=  setInterval(()=> {
    // setTimerExpired(true);
    // //Dialog element has a showModal() method which can be called to show it 
    // dialog.current.open();
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
  } ,10);
}
//Here we have to stop soething which is happening above in the handleStart thats what how to get access to this (ref helps us)
function handleStop(){
  dialog.current.open();
   clearInterval(timer.current);
}
  return (
    <>
    <ResultModal ref={dialog} targetTime = {targetTime} remainingTime={timeRemaining} onReset ={handleReset}/>
  <section className = "challenge">
   <h2>{title}</h2>
   <p className ="challenge-time">
   {targetTime} second{targetTime>1 ?'s' : ''}
   </p>
   <p>
    <button onClick = {timerIsActive ? handleStop : handleStart}>
      {timerIsActive ? 'Stop' : 'Start'} Challenge
    </button>
   </p>
   <p className ={timerIsActive ? 'active' : undefined}>
    {timerIsActive ? 'Time is Running ....' : 'TimerInactive'}
   </p>
  </section>
  </>
  );
}