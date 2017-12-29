//code from w3schools
var slideIndex = 0;

showSlides();
//the following javascript makes the image slideshow go though each picture
//the slide show moves to the next picture after 4 seconds
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none"; 
  	}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} //sets like slide index
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
