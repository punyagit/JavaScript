


function myName() {
    let p1 = document.getElementById("player1").value
    let p2 = document.getElementById("player2").value
    if (p1 === "" && p2 === "") {
        alert("Please enter name")
    } else {

        document.getElementById("td1").innerHTML = p1
        document.getElementById("td2").innerHTML = p2
        document.getElementById("nameBox").style.display = "none"

    }




}