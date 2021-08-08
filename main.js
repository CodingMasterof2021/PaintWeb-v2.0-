var mouseEvent = "empty";
var localxPOS, localyPOS;

canvas = document.getElementById("myCanvas");
var refCanvas = canvas.getContext("2d")
var brushColor = "black"; //By default
var brushThick = 2;
 
canvas.addEventListener("mousedown", clickEvent);

function clickEvent(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", mLeaveEvent);

function mLeaveEvent(e) {
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup", upEvent);

function upEvent(e) {
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mousemove", mouseMove);

function mouseMove(e) {

    cp_mouseX = e.clientX - canvas.offsetLeft;
    cp_mouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {

        refCanvas.beginPath();
        refCanvas.strokeStyle = brushColor;
        refCanvas.lineWidth = brushThick;

        console.log("Last position of x and y coordinates - ");
        console.log("x = " + localxPOS + "y = " + localyPOS)
        refCanvas.moveTo(localxPOS, localyPOS);

        console.log("Current position of x and y coordinates - ");
        console.log("x = " + cp_mouseX + "y = " + cp_mouseY)
        refCanvas.lineTo(cp_mouseX, cp_mouseY);
        refCanvas.stroke();

    }

    localxPOS = cp_mouseX;
    localyPOS = cp_mouseY;
}

