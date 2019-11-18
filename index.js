// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#000000'
dodger.style.backgroundColor = '#FF69B4'
dodger.style.bottom = '100px'

document.addEventListener('keydown', (e) =>{
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft(); 
    
  }else{
    moveDodgerRight();
  }
});

const moveDodgerLeft = () =>{
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
  if (left > 0) { dodger.style.left = `${left - 1}px` };
}

const moveDodgerRight = () =>{
  let rightNumbers = dodger.style.left.replace('px', '');
  let right = parseInt(rightNumbers, 10);
  if (right > 0) { dodger.style.left = `${right + 1}px` };
}