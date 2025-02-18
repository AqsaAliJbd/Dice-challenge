// player 1
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
let randomImage = "dice" + randomNumber;
console.log(randomImage);
let randomImageSrc = "./images/" + randomImage + ".png";
console.log(randomImageSrc);
let target = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSrc);
// player 2
let randomNumber1 =Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
let randomImage1 = "dice" + randomNumber1;
console.log(randomImage1);
let randomImageSrc1 = "./images/" + randomImage1 + ".png";
console.log(randomImageSrc1);
let target1 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSrc1);
// player 3
let randomNumber2 =Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
let randomImage2 = "dice" + randomNumber2;
console.log(randomImage2);
let randomImageSrc2 = "./images/" + randomImage2 + ".png";
console.log(randomImageSrc2);
let target2 = document.querySelectorAll("img")[2].setAttribute("src" , randomImageSrc2);
// player 4
let randomNumber3 =Math.floor(Math.random() * 6) + 1;
console.log(randomNumber3);
let randomImage3 = "dice" + randomNumber3;
console.log(randomImage3);
let randomImageSrc3 = "./images/" + randomImage3 + ".png";
console.log(randomImageSrc3);
let target3 = document.querySelectorAll("img")[3].setAttribute("src" , randomImageSrc3);

// conditions
if(randomNumber > randomNumber1 && randomNumber > randomNumber2 && randomNumber > randomNumber3) {
    document.querySelector("h1").innerHTML = "Player 1 wins" + randomNumber1;
}
else if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3 && randomNumber1 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 wins" + randomNumber2;
}
else if(randomNumber2 > randomNumber3 && randomNumber2 > randomNumber1 && randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 3 wins" + randomNumber3;
}
else if(randomNumber3 > randomNumber && randomNumber3 > randomNumber2 && randomNumber3 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 4 wins" + randomNumber;
}
else {
    document.querySelector("h1").innerHTML = "Match Draw";
}
