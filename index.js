var drumNumber = document.querySelectorAll(".drum").length;


function handleClick(){
   
    var ButtonInnerHtml = this.innerHTML;

    makesound(ButtonInnerHtml);
    buttonanimation(ButtonInnerHtml);
     
    
}

for(var i=0; i<drumNumber; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); 

}

document.addEventListener("keydown", function(event){

    makesound(event.key);
    buttonanimation(event.key);
})

function makesound(key){


    switch(key){

        case "w" :
             var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; 
         
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
         case "s" :
            var tom3 = new Audio("sounds/tom-1.mp3");
            tom3.play();    
            break;
        
        case "d" :
            var tom4 = new Audio("sounds/tom-1.mp3");
            tom4.play();   
            break;
         
        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;
         
        case "k" :
            var crash1 = new Audio("sounds/crash.mp3");
            crash1.play();
            break;
            
        case "l" :
            var Kick1 = new Audio("sounds/kick-bass.mp3");
            Kick1.play();
            break;
        default : 
            console.log(ButtonInnerHtml);    
    }

}

function buttonanimation(currentkey){

    var activebutton = document.querySelector("."+ currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function(){
     activebutton.classList.remove("pressed");   
    }, 100);
}

