var img = new Image();
img.src = 'download.png';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');



img.onload = function () {
    ctx.drawImage(img, 0, 0);
    ctx1.drawImage(img, 0, 0);
    img.style.display = 'none';


    //invert()

};

var invert = function () {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue

    }
    ctx.putImageData(imageData, 0, 0);

};
var grayScale = function () {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
};

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    let value = parseInt(this.value)
    output.innerHTML = value;
    var modifyImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = modifyImageData.data;

    for (var i = 0; i < data.length; i++) {
        if ((i + 1) % 4 !== 0) {
            data[i] = data[i] + (value - 50) / 5
        }
    }
    if (value === 50) { modifyImageData = ctx1.getImageData(0, 0, canvas.width, canvas.height) }


    ctx.putImageData(modifyImageData, 0, 0);




}







var color = document.getElementById('color');
function myClick() {

    var x = event.layerX;
    var y = event.layerY;
    console.log("x is " + x + " y is " + y)

    var pixel = ctx.getImageData(x, y, 1, 1);
    //console.log(pixel)
    var data = pixel.data;
    console.log(data)
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    color.style.background = rgba;
    color.textContent = rgba;
}
//canvas.addEventListener('mousemove', pick);