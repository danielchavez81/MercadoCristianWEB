//Variables de color
var color1 = "#DFC84F"
var color2 = "#080808"
//Ajustes al body
document.body.style.height = "100vh";
document.body.style.width = "100vw";
document.body.style.overflowX = "hidden";
document.body.style.fontFamily = "Roboto, ";

// Referencias a los elementos de HTML
var header = document.getElementById("header");
var logo = document.getElementById("logo_Image");

var section_1 = document.getElementById("section_1");
var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");

var article_1 = document.getElementById("section_1--Article_1");
var article_1_Title_Text = document.getElementById("title_Text");
var article_1_Element_Inicio = document.getElementById("Element_Inicio");
var article_1_Element_Ubicacion = document.getElementById("Element_Ubicacion");
var article_1_Element_Contacto = document.getElementById("Element_Contacto");
var article_1_Texts = article_1.querySelectorAll("p");
var element_Footer_Maps_Frame = document.getElementById("Maps_Frame");


var nav_Bar = document.getElementById("nav_Bar"); 
var nav_Bar_Elements_container = document.getElementById("nav_Elements");
var nav_Elements = nav_Bar_Elements_container.querySelectorAll("li");

//Creacion de Elementos HTML
var element_Article_Section_2 = document.createElement('article');

var element_Div_Parent_Container_1 = document.createElement('div');
var element_Div_Parent_Container_2 = document.createElement('div');
var element_Div_Parent_Container_3 = document.createElement('div');
var element_Div_Parent_Container_4 = document.createElement('div');
var element_Div_Parent_Container_5 = document.createElement('div');


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

var element_Footer = document.createElement('footer');
var element_Footer_Text = document.createElement('p');
var element_Footer_Wpp_Icon = document.createElement('img');
var element_Footer_Facebook_Image = document.createElement("img");
var element_Footer_PhoneNumber_Image = document.createElement("img");
var element_Footer_Instagram_Image = document.createElement("img");
var element_Footer_Email_Image = document.createElement("img");
var element_Footer_Facebook_Link = document.createElement("a");
var element_Footer_Instagram_Link = document.createElement("a");
var element_Footer_Email_Link = document.createElement("a");
var element_Footer_PhoneNumber_Link = document.createElement("a");
var element_Footer_Email_Link = document.createElement("a");
var element_Footer_PhoneNumber_Link = document.createElement("a");
var element_Footer_Logo_Image = document.createElement("img");
var element_Footer_Nav_Bar = document.createElement("nav");

//Cambios al CSS
article_1.style.backgroundColor = "transparent";
article_1.style.border = "8px solid #DFC84F";
header.style.backgroundColor = "#484848";
    //ajuste de secciones
section_1.style.position = "relative";
section_1.style.display = "flex";
section_1.style.flexDirection= "row";
section_1.style.height = "calc(100vh - 148px)";
header.style.height = "148px";
nav_Bar.style.height = "148px";

//Cambios al Header y a la primera seccion de la pagina
header.style.height = "137px";
header.style.backgroundColor = "";
header.style.position = "-webkit-sticky";
header.style.position ="sticky";
header.style.top ="0px";
header.style.width = "inherit";
header.className ="col-xs-12 col-sm-4 col-md-6";

logo.style.left ="20px";
logo.style.top ="30px";
logo.style.margin =" 5px 5px";
logo.className="col-xs-auto col-sm-2 col-md-auto";

nav_Bar.style.height = "137px";
nav_Bar.style.width = "inherit"
nav_Bar.style.position = "-webkit-sticky";
nav_Bar.style.position ="sticky";
nav_Bar.style.top ="0px";
nav_Bar.style.background="linear-gradient(#080808, transparent)";
nav_Bar.style.display = "flex";
nav_Bar.style.justifyContent = "flex-end";
nav_Bar.className="col-xs-12 col-sm-4 col-md-6";

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
article_1_Title_Text.style.fontFamily = "Merienda One";

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
div_Parent_1.className="col-xs-6 col-sm-6 col-md-12";
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
text_Quienes_Somos.className="col-xs-6 col-sm-6 col-md-12";

//Creacion del parrafo de la informacion del local

var paragraph_Quienes_Somos = section_Quienes_Somos.appendChild(element_Paragraph_Quienes_Somos);

paragraph_Quienes_Somos.innerHTML = "Bienvenido a nuestra pagina web! Somos un local ubicado en Balsa Las Perlas, nos especializamos en venta minorista de productos de almacen como pueden ser lacteos, bebidas, golosinas y todo lo que necesitas para tu hogar.";
paragraph_Quienes_Somos.style.color = "white";
paragraph_Quienes_Somos.style.fontSize = "36px";
paragraph_Quienes_Somos.style.width = "880px";
paragraph_Quienes_Somos.style.margin = "0px 40px";
paragraph_Quienes_Somos.className="col-xs-3 col-sm-6 col-md-12";

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

//Article Ubicacion

var article_Ubicacion = section_Ubicacion.appendChild(element_Article_Ubicacion);

article_Ubicacion.style.width = "540px";
article_Ubicacion.style.height = "500px";
article_Ubicacion.style.border = "10px solid #DFC84F"
article_Ubicacion.style.flexShrink = "0";
article_Ubicacion.style.display = "grid";
article_Ubicacion.style.placeItems = "center";
article_Ubicacion.style.marginLeft = "20px"

var text_Ubicacion = article_Ubicacion.appendChild(element_Text_Ubicacion);

text_Ubicacion.innerHTML = "¿Donde nos ubicamos?";

text_Ubicacion.style.color = "white";
text_Ubicacion.style.fontSize = "90px";
text_Ubicacion.style.width = "462px";
text_Ubicacion.style.height = "321px";
text_Ubicacion.style.marginBottom = "90px";
text_Ubicacion.className="col-xs-3 col-sm-6 col-md-12";

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

//Texts Horarios
var text_Title_Horarios = section_Horarios.appendChild(element_Text_Horarios_1);
var text_Subtitle_1_Horarios = section_Horarios.appendChild(element_Text_Horarios_2);

text_Title_Horarios.style.fontSize = "90px";
text_Title_Horarios.innerHTML = "Nuestros horarios son:"
text_Title_Horarios.style.width = "max-content";
text_Title_Horarios.style.marginLeft = "160px"
text_Title_Horarios.className="col-xs-3 col-sm-6 col-md-12";

text_Subtitle_1_Horarios.style.fontSize = "70px";
text_Subtitle_1_Horarios.innerHTML = "De 9:30 a 21:30 de Lunes a Lunes.";
text_Subtitle_1_Horarios.style.width = "830px";
text_Subtitle_1_Horarios.style.marginLeft = "160px";
text_Subtitle_1_Horarios.className="col-xs-3 col-sm-6 col-md-12";

//Div Parent 5

var div_Parent_5 = document.body.appendChild(element_Div_Parent_Container_5);

div_Parent_5.style.width = "100vw";
div_Parent_5.style.height = "120px";

//Footer
var footer = div_Parent_5.appendChild(element_Footer);

footer.style.width = "100vw";
footer.style.height = "253px";
footer.style.backgroundColor = "#080808";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "flex-start";
footer.className="col-xs-3 col-sm-6 col-md-12";

//Footer Text
var footer_Text = footer.appendChild(element_Footer_Text);

footer_Text.innerHTML = "Información de contacto:";
footer_Text.style.fontSize = "10px";
footer_Text.style.color = color1;
footer_Text.style.margin = "0px 0px 0px 50px";
footer_Text.style.right="20px";


//Footer Icons
var footer_Logo_Image = footer.appendChild(element_Footer_Logo_Image);

footer_Logo_Image.src = "img/Logo1.png";
footer_Logo_Image.alt ="Logo";
footer_Logo_Image.style.position = "relative";
footer_Logo_Image.style.left = "-260px";
footer_Logo_Image.style.top="-60px";
footer_Logo_Image.style.width="180px";
footer_Logo_Image.style.height="80px";

//Boton Wpp
var footer_Wpp_Icon = footer.appendChild(element_Footer_Wpp_Icon);

footer_Wpp_Icon.src = "img/wppIcon.png";
footer_Wpp_Icon.alt = "Whatsapp";
footer_Wpp_Icon.style.margin = "0px 30px";
footer_Wpp_Icon.style.zIndex = "0";
footer_Wpp_Icon.style.borderEndEndRadius = "40%";
footer_Wpp_Icon.style.borderTopLeftRadius = "40%";
footer_Wpp_Icon.style.borderTopRightRadius ="40%";
footer_Wpp_Icon.style.left="60px";

footer_Wpp_Icon.onmouseover = function mouse_Over(){
    this.style.border = "4px solid outer #DFC84F";
    this.style.boxShadow = "1px 10px 10px black"
    //footer_Phone_Icon_Pop_Up.style.display = "inline";
}
footer_Wpp_Icon.onmouseout = function mouse_Leave(){
    this.style.border = "";
    this.style.boxShadow = "";
    //footer_Phone_Icon_Pop_Up.style.display = "none";
}

//Boton FB

//Footer images
element_Footer.appendChild(element_Footer_Logo_Image);
var footer_Facebook_Image = footer.appendChild(element_Footer_Facebook_Image);
var footer_Email_Image = footer.appendChild(element_Footer_Email_Image);
var footer_Instagram_Image = footer.appendChild(element_Footer_Instagram_Image);


footer_Facebook_Image.src="img/facebookIcon.png";footer_Email_Image.src="img/emailIcon.png";
footer_Instagram_Image.src="img/instagramIcon.png";

//Google Maps en el Footer
var footer_Maps_Frame = footer.appendChild(element_Footer_Maps_Frame);
footer_Maps_Frame.style.position="absolute";
footer_Maps_Frame.style.width="250px";
footer_Maps_Frame.style.height="250px";
footer_Maps_Frame.style.flexShrink = "0";
footer_Maps_Frame.style.margin = "0px 10px";
footer_Maps_Frame.style.right = "2px";
footer_Maps_Frame.style.borderRadius = "5%";

//Barra de Navegación de imagenes en el Footer

var footer_Nav_Bar = footer.appendChild(element_Footer_Nav_Bar);
footer_Nav_Bar.style.position = "absolute";
footer_Nav_Bar.style.height = "250px";
footer_Nav_Bar.style.width = "250px";
footer_Nav_Bar.style.right = "272px";
footer_Nav_Bar.style.padding = "20px 20px";
footer_Nav_Bar.style.overflow ="hidden";
footer_Nav_Bar.style.backgroundColor ="#";
footer_Nav_Bar.style.zIndex ="0";
footer_Nav_Bar.style.borderRadius = "5%";

//links botones del footer
var footer_Facebook_Link = footer_Facebook_Image.appendChild(element_Footer_Facebook_Link);
element_Footer_Facebook_Image.onclick = function(){
    window.location.href = 'https://www.facebook.com/cristian.caniulef.5';
};

var footer_Instagram_Link = footer_Instagram_Image.appendChild(element_Footer_Instagram_Link);
element_Footer_Instagram_Image.onclick = function(){
    window.location.href = 'https://www.instagram.com/caniulefc/';
};
 
var footer_Email_Link = footer_Email_Image.appendChild(element_Footer_Email_Link);
element_Footer_Email_Image.onclick = function(){
    window.open('mailto:marcado.cristian.shippuden@gmail.com');
};
footer_Wpp_Icon.onclick = function(){
    window.location.href = 'https://api.whatsapp.com/send?phone=5492996544678';
};

//CAMBIOS EN EL MAPEO DE LA PAGINA, REORGANIZACION DE LAS ETIQUETAS

//creamos todos los divs

const d1 = document.createElement('div');
const d2 = document.createElement('div');
const d3 = document.createElement('div');
const d4 = document.createElement('div');
const d5 = document.createElement('div');
const d6 = document.createElement('div');

//Insertamos los divs al body

const div_1_header = document.body.appendChild(d1);
const div_2_body = document.body.appendChild(d2);
const div_3_article1 = document.body.appendChild(d3);
const div_4_article2 = document.body.appendChild(d4);
const div_5_images = document.body.appendChild(d5);
const div_6_footer = document.body.appendChild(d6);

//Insertamos los elementos ya existentes de la pagina a los divs

var ref_header = div_1_header.appendChild(header);
var ref_section1 = div_2_body.appendChild(section_1);

//Ocultamos los divs antiguos
div_Parent_1.style.display = "none";
div_Parent_2.style.display = "none";
div_Parent_3.style.display = "none";
div_Parent_4.style.display = "none";
div_Parent_5.style.display = "none";

//les damos caracteristicas a los divs

const all_divs = document.querySelectorAll('div');

for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.width = "inherit";
    all_divs[i].style.position = "relative";
}

//div 1
div_1_header.style.position = "absolute";

//div 2

//div 3 y 4

//div 5

//div 6

