var ArrayOfImages = ['paris.png', 'paris.png', 'paris.png']; //your assumed array
ArrayOfImages.forEach(function(image) {
  var img = document.createElement('img');
  img.src = image;
  img.height = "45";
  img.width = "50";
  document.body.appendChild(img);
});