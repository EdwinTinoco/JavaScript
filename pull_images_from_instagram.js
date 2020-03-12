const images = document.querySelectorAll('.FFVAD')
images.forEach(img => console.log(img.src));

let imageUrlArray = [];
images.forEach(img => imageUrlArray.push(img.src));
copy(imageUrlArray);

