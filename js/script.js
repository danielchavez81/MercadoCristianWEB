//Variables de color
var color1 = "#DFC84F"
var color2 = "#080808"

// Referencias a los elementos de HTML
var header = document.getElementById("header");
var section_1 = document.getElementById("section_1");
var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");
var article_1 = document.getElementById("section_1--Article_1");
var article_1_Title_Text = document.getElementById("title_Text");
var article_1_Texts = article_1.querySelectorAll("p");
var nav_Bar = document.getElementById("nav_Elements");


//Creacion de Elementos HTML
var article_Section_2 = document.createElement('article');

//Cambios al CSS
article_1.style.backgroundColor = "transparent";
article_1.style.border = "8px solid #DFC84F";
header.style.backgroundColor = "#484848";
    //ajuste de secciones
section_1.style.position = "relative";
section_1.style.height = "calc(100vh - 148px)";
header.style.height = "148px";
nav_Bar.style.height = "148px";

//Articulo Horarios

var section_2_Article_2 = section_2.appendChild(article_Section_2);

section_2.style.position = "relative";

section_2_Article_2.style.width = "720px";
section_2_Article_2.style.height = "720px";
section_2_Article_2.style.backgroundColor = color1;
section_2_Article_2.style.position = "absolute";
section_2_Article_2.style.top = "169px";
section_2_Article_2.style.left = "1048px";


//informacion de contacto
var numerotelefono = document.createTextNode("Teléfono de contacto: ");
var section_3_Article_1 = section_3.appendChild(numerotelefono);


//Se realizo un cambio de diseño en la pagina

//Cambios al Header y a la primera seccion de la pagina
header.style.height = "137px";
header.style.backgroundColor = "";
header.style.position = "relative";
header.style.width = "100vw";

nav_Bar.style.height = "137px";
nav_Bar.style.width = "100vw"
nav_Bar.style.background = "linear-gradient(#080808, transparent)";
nav_Bar.style.position = "relative";

section_1.style.position = "absolute";
section_1.style.top = "0px";
section_1.style.height = "100vh";
section_1.style.width = "100vw";

//Se  modifica el  articulo en la seccion 1
article_1.style.backgroundColor = "transparent";
article_1.style.borderRadius = "0px";
article_1.style.border = "";
article_1.style.alignItems = "flex-start";

for(var i = 0; i < article_1_Texts.length; i++){
    article_1_Texts[i].style.fontSize = "48px";
    article_1_Texts[i].style.lineHeight = "30px";
    article_1_Texts[i].style.color = color2;
    article_1_Texts[i].style.pointerEvents = "none";
}

article_1_Title_Text.style.fontSize = "144px";
article_1_Title_Text.style.lineHeight = "170px"
article_1_Title_Text.style.color = color2;
article_1_Title_Text.style.fontWeight = "normal";






section_2.style.display = "none";
section_3.style.display = "none";

















