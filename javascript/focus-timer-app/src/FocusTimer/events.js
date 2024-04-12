import { controls, controlsMusic } from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

      actions[action]();

     }); 
}


  // Controles de mudança de musica

  controlsMusic.addEventListener("click", (event) => {
    const musicAction = event.target.dataset.action;
    if (typeof actions[musicAction] != "function") {
      return;
    }    

    actions[musicAction]();
    
  });
  



  