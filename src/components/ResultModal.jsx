import { forwardRef, useImperativeHandle,useRef } from "react";
export default function ResultModal({ref,result,targetTime}) {
  const dialog = useRef() ;
  useImperativeHandle(ref, () => {
    return {
      //When the open property is called this dialog showModal property will be called 
      open(){
        dialog.current.showModal();
      }
    }
  });
  return (
  <dialog ref = {dialog} className ="result-modal" open >
    <h2>You {result}</h2>
    <p>The target time was <strong>{targetTime} seconds.</strong></p>
    <p>You Stopped the Timer with<strong>X seconds left</strong> </p>

    {/* When user clicks Close:
    ✔ The dialog closes automatically */}
    <form method = "dialog">
      <button>Close</button>
    </form>
  </dialog>
  );
}


