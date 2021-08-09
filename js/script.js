//Variables de color
var color1 = "#DFC84F"
var color2 = "#484848"

// Referencias a los elementos de HTML
var header = document.getElementById("header");
var section_1 = document.getElementById("section_1");
var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");
var article_1 = document.getElementById("section_1--Article_1");

//Creacion de Elementos HTML

var article = document.createElement('article');

//Cambios al CSS
article_1.style.backgroundColor = "transparent";
article_1.style.border = "8px solid #DFC84F";
header.style.backgroundColor = "#484848";

//Articulo Horarios

var section_2_Article_2 = section_2.appendChild(article);

section_2.style.position = "relative"

section_2_Article_2.style.width = "720px";
section_2_Article_2.style.height = "720px";
section_2_Article_2.style.backgroundColor = color1;
section_2_Article_2.style.position = "absolute";
section_2_Article_2.style.top = "169px"
section_2_Article_2.style.left = "1048px"







