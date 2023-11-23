

function openSecondDiv(){
  document.querySelector('.screen1').style.display = 'none';
  document.querySelector('.screen2').style.display = 'flex';
}

function openFirstDiv(){
  document.querySelector('.screen2').style.display = 'none';
  document.querySelector('.screen1').style.display = 'block';
}