
//var myModule = require('myModule');
// i as 10 .. R as king

let arrayOfCard = ["C1C.png", "D1D.png", "H1H.png", "S1S.png", "C2C.png", "D2D.png", "H2H.png", "S2S.png", "C3C.png", "D3D.png", "H3H.png", "S3S.png"
    , "C4C.png", "D4D.png", "H4H.png", "S4S.png", "C5C.png", "D5D.png", "H5H.png", "S5S.png", "C6C.png", "D6D.png", "H6H.png", "S6S.png",
    "C7C.png", "D7D.png", "H7H.png", "S7S.png", "C8C.png", "D8D.png", "H8H.png", "S8S.png", "C9C.png", "D9D.png", "H9H.png", "S9S.png",
    "CIC.png", "DID.png", "HIH.png", "SIS.png", "CJC.png", "DJD.png", "HJH.png", "SJS.png", "CQC.png", "DQD.png", "HQH.png", "SQS.png",
    "CRC.png", "DRD.png", "HRH.png", "SRS.png"];


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
    let player1 = []
    let player2 = []
    let player3 = []
    let player4 = []

    for (let i = 0; i < newShuffleCard.length; i++) {
        let distCard = i % 4;
        if (distCard === 0) player1.push(newShuffleCard[i])
        if (distCard === 1) player2.push(newShuffleCard[i])
        if (distCard === 3) player3.push(newShuffleCard[i])
        if (distCard === 3) player4.push(newShuffleCard[i])
    }
    sortAndDisplayCard(player1, "player1")
    sortAndDisplayCard(player2, "player2")
    sortAndDisplayCard(player3, "player3")
    sortAndDisplayCard(player4, "player4")
})();

function sortAndDisplayCard(array, id) {
    let myImg;
    array.sort()
    for (let i = 0; i < array.length; i++) {
        myImg = document.createElement("img")
        myImg.src = "image/" + array[i]
        myImg.width = 100;
        myImg.height = 130;
        myImg.style.left = (i * 14) + "px";
        document.getElementById(id).appendChild(myImg)
        myImg.addEventListener("mouseover", myFunction);
        myImg.addEventListener("mouseout", myThirdFunction);

    }

}

function myFunction(e) {
    let x = e.currentTarget
    x.style.transform = "scale(1.1)";
}

function myThirdFunction(e) {
    let x = e.currentTarget
    x.style.transform = "scale(1)";
}





