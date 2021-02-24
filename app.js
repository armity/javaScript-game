// const input = document.querySelector('input');
const container = document.querySelector('.container');
const button = document.querySelector('button');
console.log(container);

let openCard = [];
const unmatched = () => {
  console.log(document.getElementsByClassName(`${openCard[0]}`)[0]);
  document.getElementsByClassName(`${openCard[0]}`)[0].style.visibility = "hidden"
  document.getElementsByClassName(`${openCard[1]}`)[0].style.visibility = "hidden"
  document.getElementsByClassName(`${openCard[1]}`)[1].style.visibility = "hidden"
  document.getElementsByClassName(`${openCard[0]}`)[1].style.visibility = "hidden"
  console.log(document.getElementsByClassName(`${openCard[0]}`)[0]);
  // openCard[1].style.visibility = "hidden"
  return openCard = []

  
}
const memoryGame = () => {
  for (let i = 0; i < 12; i++) {
    let box = document.createElement('div');
    let currentImage = document.createElement('IMG');
    let animal = currentImage.className;
    // let imageId = document.createElement("id");
    // imageId.setAttribute("giraffe", ID)
   
    // currentImage.setAttribute("src", "./image1.png");
    if (i == 0 || i == 6) {
      currentImage.src = "./image1.png"
      currentImage.setAttribute('class','giraffe')
      

    }
    if (i == 1 || i ==7) {
      currentImage.src = "./image2.png"
      currentImage.setAttribute('class','cat')
    }
    if (i == 2 || i ==8) {
      currentImage.src = "./image3.png"
      currentImage.setAttribute('class','deer')
    }
    if (i == 3 || i ==9) {
      currentImage.src = "./image4.png"
      currentImage.setAttribute('class','elephant')
    }
    if (i == 4 || i ==10) {
      currentImage.src = "./image5.png"
      currentImage.setAttribute('class','turtle')
    }
    if (i == 5 || i ==11) {
      currentImage.src = "./image6.png"
      currentImage.setAttribute('class','mouse')
    }
    
    console.log(currentImage);
    box.appendChild(currentImage);
    box.id = i;
    box.addEventListener('click', () => {
      // box.classList.toggle('show');
      currentImage.style.visibility = "visible";
      // currentImage.className
      console.log(currentImage.className);

      // const openCards = () => {
        
      openCard.push(currentImage.className);
        console.log(openCard);
      
      if (openCard.length == 2) {
        if (openCard[0] === openCard[1]) {
        openCard = []
        console.log('matched');
      } else {
        setTimeout(() => {
          unmatched();
        }, 2000);
        
        console.log(openCard);

      // button.addEventListener('click', () => {
      //     const shuffledCards = shuffle(currentImage);
      //     for (let index = 0; index < array.length; index++) {
      //       const element = array[index];
            
      //     }
      //     for (let i= 0; i < shuffledCards.length; i++){
             
      //        });
      }
    }
    });

    
  
    container.appendChild(box);
  }

  
       
          
}
    

memoryGame();