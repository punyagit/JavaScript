const canvas = document.getElementById('canvas');
//const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e)
})



let tempX = 0;

const ctx = canvas.getContext('2d');

function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();

    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);


    if (tempX) {
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 6;
        ctx.lineTo(x, y);

        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(x, y);
        console.log("fdf")
        tempX = 1
    }



}

