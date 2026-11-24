let squareArea = document.querySelector("#squarearea");
let createSquare = document.querySelector("#added");
let squareCount = parseInt(Math.random()*21)+30;

for(let i = 0; i < squareCount; i++){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px"
    square.style.left = parseInt(Math.random()*(700-50))+"px"
    squareArea.append(square);
}

createSquare.addEventListener("click", ()=>{
   let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px"
    square.style.left = parseInt(Math.random()*(700-50))+"px"
    squareArea.append(square);
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