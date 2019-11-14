

// on crée l'objet
var image = new Image();
// événement : une fois le chargement terminé
image.onload = function() {
};
let div = document.createElement('p');
document.body.append(div);
// on modifie l'adresse de l'objet "image", ce qui lance le chargement
image.src = "img/Capture.png";
div.appendChild(image);
Domino.img=image;
document.write(Domino.case1);
document.write(Domino.case2);
