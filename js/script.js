//Variables de color
var color1 = "#DFC84F"
var color2 = "#080808"

document.body.style.height = "100vh";
document.body.style.width = "100vw";
document.body.style.overflowX = "hidden";

// Referencias a los elementos de HTML
var header = document.getElementById("header");

var section_1 = document.getElementById("section_1");
var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");

var article_1 = document.getElementById("section_1--Article_1");
var article_1_Title_Text = document.getElementById("title_Text");
var article_1_Texts = article_1.querySelectorAll("p");

var nav_Bar = document.getElementById("nav_Bar"); 
var nav_Bar_Elements_container = document.getElementById("nav_Elements");
var nav_Elements = nav_Bar_Elements_container.querySelectorAll("li");
 
//Creacion de Elementos HTML
var article_Section_2 = document.createElement('article');
var div_Parent_Container_1 = document.createElement('div');
var div_Parent_Container_2 = document.createElement('div');
var section_Quienes_Somos = document.createElement('section');
var article_Quienes_Somos = document.createElement('article');
var text_Quienes_Somos = document.createElement('p');
var div_Quienes_Somos = document.createElement('div');

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
header.style.position = "absolute";
header.style.width = "inherit";

nav_Bar.style.height = "137px";
nav_Bar.style.width = "inherit"
nav_Bar.style.background = "linear-gradient(#080808, transparent)";
nav_Bar.style.position = "relative";
nav_Bar.style.display = "flex";
nav_Bar.style.justifyContent = "flex-end";

//Efecto Hover a los elementos de la barra de navegacion
for(var x = 0; x < nav_Elements.length; x++){

    nav_Elements[x].addEventListener("mouseenter", function mouse_Enter(){
        this.style.backgroundColor="";
        this.style.border="3px solid #080808";
        this.style.position = "relative";
        this.style.top = "-5px";
        this.style.boxShadow = "0px 10px 10px black";
    })
    nav_Elements[x].addEventListener("mouseleave", function mouse_Leave(){
        this.style.backgroundColor="";
        this.style.border="";
        this.style.top = "";
        this.style.boxShadow = "";
    })
}

section_1.style.position = "absolute";
section_1.style.top = "0px";
section_1.style.height = "100vh";
section_1.style.width = "inherit";

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

//Se crea un div que contiene la primera parte de la pagina para posicionar mejor los elementos
var div_Parent_1 = document.body.appendChild(div_Parent_Container_1);

//Se colocan los elementos de la primera seccion como hijos del div
div_Parent_1.appendChild(header);
div_Parent_1.appendChild(section_1);

div_Parent_1.style.height = "100vh";
div_Parent_1.style.width = "inherit";
div_Parent_1.style.position = "relative";

//Creacion de la seccion "¿quienes somos?" de la pagina
var section_Quienes_Somos_REF = document.body.appendChild(section_Quienes_Somos);

section_Quienes_Somos_REF.style.position = "relative";
section_Quienes_Somos_REF.style.height = "500px";
section_Quienes_Somos_REF.style.width = "inherit"
section_Quienes_Somos_REF.style.backgroundColor = color2;
section_Quienes_Somos_REF.style.display = "flex";
section_Quienes_Somos_REF.style.justifyContent = "center";
section_Quienes_Somos_REF.style.alignItems = "center";

//Div Parent 2
var div_Parent_2 = document.body.appendChild(div_Parent_Container_2);

div_Parent_2.appendChild(section_Quienes_Somos_REF);
div_Parent_2.style.position = "relative";

//Se crea el articulo ¿Quienes somos? y se coloca dentro de la seccion como hijo
var article_Quienes_Somos_REF = section_Quienes_Somos_REF.appendChild(article_Quienes_Somos);

article_Quienes_Somos_REF.style.width = "543px";
article_Quienes_Somos_REF.style.height = "316px";
article_Quienes_Somos_REF.style.border = "10px solid #DFC84F"
article_Quienes_Somos_REF.style.display = "grid";
article_Quienes_Somos_REF.style.placeContent = "center";
article_Quienes_Somos_REF.style.justifyContent = "center";

//creacion del texto ¿Quienes somos?
var text_Quienes_Somos_REF = article_Quienes_Somos_REF.appendChild(text_Quienes_Somos);

text_Quienes_Somos_REF.innerHTML = "¿Quienes Somos?";
text_Quienes_Somos_REF.style.color = "white";
text_Quienes_Somos_REF.style.fontSize = "72px";
text_Quienes_Somos_REF.style.width = "min-content";

//Creacion del parrafo de la informacion del local





