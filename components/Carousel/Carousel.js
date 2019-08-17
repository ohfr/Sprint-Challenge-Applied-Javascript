/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

const carouselImages = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

const carouselCreator = arr => {
  const main = document.createElement('div');
  main.classList.add('carousel');

  const lftBtn = document.createElement('div');
  lftBtn.classList.add('left-button');
  lftBtn.textContent = '<';
  lftBtn.addEventListener('click', () => {
    // bad code part 2, it works but man this is gross
    firstImg.src.includes('mountains') ? firstImg.src = arr[3] : firstImg.src.includes('turntable') ? firstImg.src = arr[2] : firstImg.src.includes('trees') ? firstImg.src = arr[1] : firstImg.src = arr[0];
  })
  main.appendChild(lftBtn);

  const firstImg = document.createElement('img');
  firstImg.src = arr[0];
  firstImg.style.display = 'block';
  main.appendChild(firstImg);

  // const secondImg = document.createElement('img');
  // secondImg.src = "./assets/carousel/computer.jpeg";
  // secondImg.style.visibility = 'hidden';
  // main.appendChild(secondImg);

  // const thirdImg= document.createElement('img');
  // thirdImg.src = "./assets/carousel/trees.jpeg";
  // thirdImg.style.visibility = 'hidden';
  // main.appendChild(thirdImg);

  // const fourthImg = document.createElement('img');
  // fourthImg.src = "./assets/carousel/turntable.jpeg";
  // fourthImg.style.visibility = 'hidden';
  // main.appendChild(fourthImg);
  
  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.textContent = '>';
  rightBtn.addEventListener('click', () => {

    // I know this is bad code ):
    firstImg.src.includes('mountains') ? firstImg.src = arr[1] : firstImg.src.includes('computer') ? firstImg.src = arr[2] : firstImg.src.includes('trees') ? firstImg.src = arr[3] : firstImg.src = arr[0];
  
  })
  main.appendChild(rightBtn);

  return main;
}

carouselContainer.appendChild(carouselCreator(carouselImages));