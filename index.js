// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });


function setSpeed(){
  let speed = document.getElementById('speed').value
  return parseInt(speed)
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

  });

  document.addEventListener("keydown", function(e) {
   if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
         moveDodgerUp();
       }
   });

   document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
         moveDodgerDown();
       }
   });

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let speed = setSpeed()
    if (left > 0) {
      dodger.style.left = `${left - speed}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let speed = setSpeed()
    if (left < 360) {
      dodger.style.left = `${left + speed}px`;
    }
  }

  function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    let speed = setSpeed()
    if (bottom < 380) {
      dodger.style.bottom = `${bottom + speed}px`;
    }
  }

  function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    let speed = setSpeed()
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - speed}px`;
    }
  }