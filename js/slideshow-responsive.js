var slideIndexR = 1;
showSlidesR(slideIndexR);

function plusSlidesR(n) {
  showSlidesR(slideIndexR += n);
}

function currentSlideR(n) {
  showSlidesR(slideIndexR = n);
}

function showSlidesR(n) {
  var i;
  var slides = document.getElementsByClassName("slides-responsive");
  var dots = document.getElementsByClassName("dot-responsive");
  if (n > slides.length) {slideIndexR = 1}
  if (n < 1) {slideIndexR = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexR-1].style.display = "block";
  dots[slideIndexR-1].className += " active";
}