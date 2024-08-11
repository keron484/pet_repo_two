import { Player } from '@lottiefiles/react-lottie-player';
export function Spinnersingle() {
  return (
    <>
      <div className="d-flex flex-row align-items-center place-items-center justify-content-center">
        <div>
          <div className="spinner-grow text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}
export function Spinnerlong(){
  return(
    <>
     <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
   <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
   <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
   <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
   <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
   <div class="spinner-grow c-pet" role="status">
    <span class="visually-hidden">Loading...</span>
   </div>
    </>
  )
}

export function Comfort(){
  return(
    <>
     <div className="container">
      <div className="player-comfort">
         <Player
         className="player"
         src="https://lottie.host/304e52c4-7b6c-4090-893f-0ce5478fbb43/1tE2wunnH5.json"
         loop
         autoplay
         />
      </div>
     </div>
    </>
  ) 
}

export function Animation(){
   return(
    <>
         <div className="container">
      <div className="player-apply">
         <Player
         className="player"
         src="https://lottie.host/9329ddb5-feec-4faf-afe9-48c13013bf7f/up88RO9bGw.json"
         loop
         autoplay
         />
      </div>
     </div>
    </>
   )
}

export function Completed(){
   return(
    <>
             <div className="container">
      <div className="player-apply">
         <Player
         className="player"
         src="https://lottie.host/182c84ff-cb3d-413f-a89b-2e9450272ffc/9aLn2r12dP.json"
         loop
         autoplay
         />
      </div>
     </div>
    </>
   )
}
