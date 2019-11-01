
//var myModule = require('myModule');


let arrayOfCard = ["AC.png", "AD.png", "AH.png", "AS.png", "2C.png", "2D.png", "2H.png", "2S.png", "3C.png", "3D.png", "3H.png", "3S.png"
    , "4C.png", "4D.png", "4H.png", "4S.png", "5C.png", "5D.png", "5H.png", "5S.png", "6C.png", "6D.png", "6H.png", "6S.png",
    "7C.png", "7D.png", "7H.png", "7S.png", "8C.png", "8D.png", "8H.png", "8S.png", "9C.png", "9D.png", "9H.png", "9S.png",
    "10C.png", "10D.png", "10H.png", "10S.png", "JC.png", "JD.png", "JH.png", "JS.png", "QC.png", "QD.png", "QH.png", "QS.png",
    "KC.png", "KD.png", "KH.png", "KS.png"];


function shuffleArray(arr) {
    let newArray = []

    while (arr.length >= 1) {
        let randomNumber = Math.floor(Math.random() * arr.length);
        newArray.push(arr[randomNumber])
        arr[randomNumber] = arr[arr.length - 1]
        arr.pop();
    }
    return newArray

}



let newShuffleCard = shuffleArray(arrayOfCard);


(function () {
    let myImg;
    for (let i = 0; i < newShuffleCard.length; i++) {
        myImg = document.createElement("img")
        myImg.src = "image/" + newShuffleCard[i]
        myImg.width = 100;
        myImg.height = 150;

        let distCard = i % 4;
        if (distCard === 0) {
            myImg.style.left = i * 7 + "px";
            document.getElementById('player1').appendChild(myImg)
        };
        if (distCard === 1) {
            myImg.style.left = i * 7 + "px";
            document.getElementById('player2').appendChild(myImg)
        }
        if (distCard === 2) {
            myImg.style.left = i * 7 + "px";
            document.getElementById('player3').appendChild(myImg)
        };
        if (distCard === 3) {
            myImg.style.left = i * 7 + "px";
            document.getElementById('player4').appendChild(myImg)
        };

    }
})();









