let dodger = document.getElementById('dodger')

document.addEventListener("keydown", function(e) {
    
    if (e.key === "ArrowLeft") {
        // string
        let leftNumbers = dodger.style.left.replace("px", "");
        // string converted to number using base of 10
        let left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`;

    } else if (e.key === "ArrowRight") {
        
        let rightNumbers = dodger.style.right.replace("px","");
        console.log(dodger)
        let right = parseInt(rightNumbers, 10);
        
        dodger.style.right = `${right + 1}px`;
    };

  });
  