//Variables de color
var color1 = "#DFC84F"
var color2 = "#080808"
//Ajustes al body
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

var element_IFrame_Ubicacion = document.getElementById("section_2_ubication");
 
//Creacion de Elementos HTML
var element_Article_Section_2 = document.createElement('article');

var element_Div_Parent_Container_1 = document.createElement('div');
var element_Div_Parent_Container_2 = document.createElement('div');
var element_Div_Parent_Container_3 = document.createElement('div');
var element_Div_Parent_Container_4 = document.createElement('div');

var element_Section_Quienes_Somos = document.createElement('section');
var element_Article_Quienes_Somos = document.createElement('article');
var element_Text_Quienes_Somos = document.createElement('p');
var element_Div_Quienes_Somos = document.createElement('div');
var element_Paragraph_Quienes_Somos = document.createElement('p');

var element_Section_Ubicacion = document.createElement('section');
var element_Article_Ubicacion = document.createElement('article');
var element_Text_Ubicacion = document.createElement('p');

var element_Section_Horarios = document.createElement('section');
var element_Text_Horarios_1 = document.createElement("p");
var element_Text_Horarios_2 = document.createElement("p");
var element_Text_Horarios_3 = document.createElement("p");

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

var section_2_Article_2 = section_2.appendChild(element_Article_Section_2);

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
var div_Parent_1 = document.body.appendChild(element_Div_Parent_Container_1);

//Se colocan los elementos de la primera seccion como hijos del div
div_Parent_1.appendChild(header);
div_Parent_1.appendChild(section_1);

div_Parent_1.style.height = "100vh";
div_Parent_1.style.width = "inherit";
div_Parent_1.style.position = "relative";

//Creacion de la seccion "¿quienes somos?" de la pagina
var section_Quienes_Somos = document.body.appendChild(element_Section_Quienes_Somos);

section_Quienes_Somos.style.position = "relative";
section_Quienes_Somos.style.height = "500px";
section_Quienes_Somos.style.width = "inherit"
section_Quienes_Somos.style.backgroundColor = color2;
section_Quienes_Somos.style.display = "flex";
section_Quienes_Somos.style.justifyContent = "center";
section_Quienes_Somos.style.alignItems = "center";

//Div Parent 2
var div_Parent_2 = document.body.appendChild(element_Div_Parent_Container_2);

div_Parent_2.appendChild(section_Quienes_Somos);
div_Parent_2.style.position = "relative";

//Se crea el articulo ¿Quienes somos? y se coloca dentro de la seccion como hijo
var article_Quienes_Somos = section_Quienes_Somos.appendChild(element_Article_Quienes_Somos);

article_Quienes_Somos.style.width = "543px";
article_Quienes_Somos.style.height = "316px";
article_Quienes_Somos.style.border = "10px solid #DFC84F"
article_Quienes_Somos.style.display = "grid";
article_Quienes_Somos.style.placeContent = "center";
article_Quienes_Somos.style.justifyContent = "center";

//creacion del texto ¿Quienes somos?
var text_Quienes_Somos = article_Quienes_Somos.appendChild(element_Text_Quienes_Somos);

text_Quienes_Somos.innerHTML = "¿Quienes Somos?";
text_Quienes_Somos.style.color = "white";
text_Quienes_Somos.style.fontSize = "72px";
text_Quienes_Somos.style.width = "min-content";

//Creacion del parrafo de la informacion del local

var paragraph_Quienes_Somos = section_Quienes_Somos.appendChild(element_Paragraph_Quienes_Somos);

paragraph_Quienes_Somos.innerHTML = "Bienvenido a nuestra pagina web! Somos un local ubicado en Balsa Las Perlas, nos especializamos en venta minorista de productos de almacen como pueden ser lacteos, bebidas, golosinas y todo lo que necesitas para tu hogar.";
paragraph_Quienes_Somos.style.color = "white";
paragraph_Quienes_Somos.style.fontSize = "36px";
paragraph_Quienes_Somos.style.width = "880px";
paragraph_Quienes_Somos.style.margin = "0px 40px";

//Div parent 3
var div_Parent_3 = document.body.appendChild(element_Div_Parent_Container_3);

div_Parent_3.style.height = "100vh";
div_Parent_3.style.width = "inherit";

//Section ubicacion
var section_Ubicacion = div_Parent_3.appendChild(element_Section_Ubicacion);

section_Ubicacion.style.height = "100vh";
section_Ubicacion.style.width = "inherit";
section_Ubicacion.style.backgroundImage = "url(img/bg2.png)";
section_Ubicacion.style.display = "flex";
section_Ubicacion.style.alignItems = "center";
section_Ubicacion.style.justifyContent = "flex-end";
section_Ubicacion.style.padding = "130px";

//iFrame Ubicacion

var iframe_Ubicacion = section_Ubicacion.appendChild(element_IFrame_Ubicacion);

iframe_Ubicacion.style.width = "990px";
iframe_Ubicacion.style.height = "780px";
iframe_Ubicacion.style.flexShrink = "0";
iframe_Ubicacion.style.margin = "0px 100px";

//Article Ubicacion

var article_Ubicacion = section_Ubicacion.appendChild(element_Article_Ubicacion);

article_Ubicacion.style.width = "540px";
article_Ubicacion.style.height = "500px";
article_Ubicacion.style.border = "10px solid #DFC84F"
article_Ubicacion.style.flexShrink = "0";
article_Ubicacion.style.display = "grid";
article_Ubicacion.style.placeItems = "center";

var text_Ubicacion = article_Ubicacion.appendChild(element_Text_Ubicacion);

text_Ubicacion.innerHTML = "¿Donde nos ubicamos?";

text_Ubicacion.style.color = "white";
text_Ubicacion.style.fontSize = "90px";
text_Ubicacion.style.width = "462px";
text_Ubicacion.style.height = "321px";
text_Ubicacion.style.marginBottom = "90px";

//Div parent 4

var div_Parent_4 = document.body.appendChild(element_Div_Parent_Container_4);

div_Parent_4.style.width = "inherit";
div_Parent_4.style.height = "100vh";
div_Parent_4.style.position = "relative";

//Section Horarios
var section_Horarios = div_Parent_4.appendChild(element_Section_Horarios);

section_Horarios.style.width = "inherit";
section_Horarios.style.height = "100vh";
section_Horarios.style.backgroundImage = "url(img/bg3.png)";
section_Horarios.style.position = "absolute";
section_Horarios.style.display = "flex";
section_Horarios.style.flexDirection = "column";
section_Horarios.style.justifyContent = "center";
section_Horarios.style.alignItems = "flex-start";

var text_Title_Horarios = section_Horarios.appendChild(element_Text_Horarios_1);
var text_Subtitle_1_Horarios = section_Horarios.appendChild(element_Text_Horarios_2);
var text_Subtitle_2_Horarios = section_Horarios.appendChild(element_Text_Horarios_3);


text_Title_Horarios.style.fontSize = "96px";
text_Title_Horarios.innerHTML = "Nuestros horarios son:"
text_Title_Horarios.style.width = "max-content";
text_Title_Horarios.style.marginLeft = "160px"

text_Subtitle_1_Horarios.style.fontSize = "72px";
text_Subtitle_1_Horarios.innerHTML = "-De 00:00 a 00:00 de Lunes a Sabado.";
text_Subtitle_1_Horarios.style.width = "830px";
text_Subtitle_1_Horarios.style.marginLeft = "160px"

text_Subtitle_2_Horarios.style.fontSize = "72px";
text_Subtitle_2_Horarios.innerHTML = "-De 00:00 a 00:00 los Domingos.";
text_Subtitle_2_Horarios.style.width = "830px";
text_Subtitle_2_Horarios.style.marginLeft = "160px"