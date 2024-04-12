import state from './state.js';

export function togglesRunnings() {
  state.isRunning = document.documentElement.classList.toggle('running');
};

export function reset () {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
}


//volumes

  export function increaseVolume() {
    const audioElement = document.getElementById('raining');

  if (audioElement.volume < 100) {
    audioElement.volume += 10;

    console.log(`volumeUp: ' + ${audioElement.volume}`);
  }

}
  export function decreaseVolume() {
    const audioElement = document.getElementById('volumeDown');

    if (audioElement.volume > 0) {
      audioElement.volume -= 10;
  
      console.log(`volumeUp: ' + ${audioElement.volume}`);
    }
}

// musicas

export function cafeteria() {
  const audioElement = document.getElementById('cafeteria');
  if (state.isMute) {
    audioElement.play();
    state.isMute = false;
  } else {
  audioElement.pause();
  state.isMute = true;
  }
}

export function raining() {
  const audioElement = document.getElementById('rain');
  if (state.isMute) {
    audioElement.play();
    state.isMute = false;
  } else {
  audioElement.pause();
  state.isMute = true;
  }
}

export function forest() {
  const audioElement = document.getElementById('forest');
  if (state.isMute) {
    audioElement.play();
    state.isMute = false;
  } else {
  audioElement.pause();
  state.isMute = true;
  }
}

export function fireplace() {
  const audioElement = document.getElementById('fireplace');
  if (state.isMute) {
    audioElement.play();
    state.isMute = false;
  } else {
  audioElement.pause();
  state.isMute = true;
  }
}


//tocando uma musica por vez



//configurando o tempo

export function settingTime () {
  
}