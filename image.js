const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const alt = {'images/pic1.jpg':'Blue Eye', 'images/pic2.jpg':'Marble', 'images/pic3.jpg':'Purple Flowers', 'images/pic4.jpg':'Egyptian', 'images/pic5.jpg':'Butterfly'};
/* Looping through images */

for(const i of array){
	const newImage = document.createElement('img');
	newImage.setAttribute('src', i);
	newImage.setAttribute('alt', alt[i]);
	thumbBar.appendChild(newImage);
	
	newImage.addEventListener('click', e => {
		displayedImage.src = e.target.src;
    	displayedImage.src = e.target.src;
	});
	
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});