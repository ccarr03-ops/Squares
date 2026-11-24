let squareArea = document.querySelector("#squarearea");
let createSquare = document.querySelector("#added");
let colors = document.querySelector("#color");
let squareCount = parseInt(Math.random()*21)+30;

function square(){
    let square = document.createElement("div");

    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px"
    square.style.left = parseInt(Math.random()*(700-50))+"px"
    square.style.height = parseInt(Math.random()*(55-25)+ 25)+"px"
    square.style.width = parseInt(Math.random()*(55-25)+ 25)+"px"
    squareArea.append(square);

    //Changes Colors
    colors.addEventListener("click", ()=> {
    square.style.backgroundColor = getRandomColor();
});

}

//creates the amount of squares equal to squareCount
for(let i = 0; i < squareCount; i++){
    square();
}

//creates a new square
createSquare.addEventListener("click", ()=>{
   square();
});

function getRandomColor(){
    let possibleLetter = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        let postiton = parseInt(Math.random()*possibleLetter.length)

        color+=possibleLetter.charAt(postiton);
    }
    return color;
}

//on click, make the square come to the top. hint: use the z-index