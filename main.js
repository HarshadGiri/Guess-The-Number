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
         
        Hisc.innerHTML = `High Score : ${cs}`
    
    }else if(userInput < computer ) {
        guessN.innerHTML = "You Guess Too Lower!"
    
       
        
    }
    if (userInput > computer ) {
        guessN.innerHTML = "You Guess Too Higher!"   

 
    }   
 
   
});



reset.addEventListener('click' , function(userInput){
userInput.preventDefault();
})

let cs= 50;
currsc.innerHTML =`Current Score: ${cs}`


    check.addEventListener('click', function(){
       
        const userInput = document.querySelector('#one').value;
        if(userInput>computer || userInput<computer && cs>0){
            cs=cs-5;
            currsc.innerHTML =`Current Score: ${cs}`
            
            

        }
       else if(cs == 0){

            guessN.innerHTML = "Oop!! You lose the game, Reset to try again."
        }
    })