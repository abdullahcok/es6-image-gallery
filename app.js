const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.5;

/** const [current, images] = [
        document.querySelector('#current');
        document.querySelectorAll('.images img');
];

img.forEach(img => img.addEventListener('click', (e)
                               => (current.src = e.target.src)
                             ));
**/

//set first img opacity
images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
      //reset opacity on next click
      images.forEach(img => img.style.opacity = 1);

      //change opacity on click
      e.target.style.opacity = opacity

      //change source of current image to clicked imaged
      current.src = e.target.src;

      //add css fadeIn animation
      current.classList.add('fade-in');

      //remove fadeIn class after click
      setTimeout(() => current.classList.remove('fade-in'), 500);
}
