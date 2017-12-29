
//This is the javascript file which handles to modal image
//Modal image has been used in the drivers page to make the picture
//of the driver bigger. 

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//when you click on the image this brings up the modal
window.openModal = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// this creates the modal for each picutre 
var images = document.getElementsByClassName('driverimage');
for(var i=0, len = images.length; i < len; i++){
    images[i].addEventListener('click', openModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}




