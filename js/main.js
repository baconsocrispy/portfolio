//skills slideshow
var slideIndex = 0;
showSlide(slideIndex);

// returns all slide objects in an array
function getSlides()  {
  return document.getElementsByClassName('slides');
}

// sets slide at index 'n' display to 'block'
function showSlide(n) {
  var slides = getSlides();
  hideSlides();
  slides[n].style.display = "block";
}

// cycles through slides and sets diplay to "none"
function hideSlides()  {
  var slides = getSlides();
  for (i = 0; i < slides.length; i++)     {
    slides[i].style.display = "none";
  }
}

// handles logic for rotating slides with arrow buttons
function  advanceSlides(n) {
  var slides = getSlides();
  var newIndex = slideIndex + n;
  if (newIndex < 0) { slideIndex = slides.length - 1; }
  else if (newIndex > slides.length - 1) { slideIndex = 0; }
  else slideIndex = newIndex;
  showSlide(slideIndex);
}

// popup contact form 
function openContact()  {
  document.getElementById('contact').style.display = "block";
}

function closeContact() {
  document.getElementById('contact').style.display = "none";
}