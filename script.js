let road = document.querySelector('.road');


road.style.border = '2px solid gray';

let black = document.querySelectorAll('.black-stripe'); 
let white = document.querySelectorAll('.white-stripe'); 
let buttons = document.querySelectorAll('.buttons button'); 

black.forEach(function(black_block){
  black_block.style.backgroundColor = 'black';
});

buttons[0].addEventListener('click', function(){
  console.log('Я нажал на кнопку');

  for(let i = 0; i < white.length; i++){

    white[i].innerHTML = '';

    let image = document.createElement('IMG');
    image.src = 'Upward.svg';

    white[i].append(image);
  }
});

buttons[1].addEventListener('click', function(){
  for(let i = 0; i < white.length; i++){
    white[i].innerHTML = '';
    let image = document.createElement('IMG');
    image.src = 'Upward.svg';
    image.style.transform = 'rotate(180deg)';
    white[i].append(image);
  }
});