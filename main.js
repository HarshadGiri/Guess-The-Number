const computer = Math.floor(Math.random() * 50);




const check = document.querySelector('#ch');

const guessN = document.querySelector('#Guess');

const reset = document.querySelector('#re');

const currsc = document.querySelector('#CR');
const Hisc = document.querySelector('#HI')

reset.addEventListener('click', function(){
    location.reload();
});

check.addEventListener('click', function () {
    
    const userInput = document.querySelector('#one').value;
    
    if (userInput == computer){
        guessN.innerHTML= `You Guessed Correct,Your number is ${computer}`;
      
        
    
    }else if(userInput < computer) {
        guessN.innerHTML = "You Guess Too Lower!"
        
            
          
        
       

    
    }
    if (userInput > computer) {
        guessN.innerHTML = "You Guess Too Higher!"   
        
      
    }
 
   
});



reset.addEventListener('click' , function(userInput){
userInput.preventDefault();
})


const cs= 50;
currsc.innerHTML =`Current Score: ${cs}`



  