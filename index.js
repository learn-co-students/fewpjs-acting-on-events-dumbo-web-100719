// Your code here

let dodger = document.getElementById("dodger");


// Move LEFT function

function moveDodgerLeft() {

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
    console.log(left);
}




// Move RIGHT function

function moveDodgerRight() {
    
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right > 0) {
        dodger.style.left = `${right + 1}px`;
    }
    console.log(right);
}





// event listener

document.addEventListener("keydown", function(e) {
    
    if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    console.log("moved left")
    }

    if (e.key === "ArrowRight") {
    moveDodgerRight();
    console.log("moved right")
    }

});





// document.addEventListener("keydown", function(e) {

//     if (e.key === "ArrowRight") {
//     moveDodgerRight();
//     }
//     console.log("moved right")
// });
    