//Ajustes al body
var body = document.body;
body.id = "body";

//Funcion para crear divs, parametros: id del padre, id propia del div
function addDiv(IDpadre, id) {
  let parent = document.getElementById(IDpadre);
  let element = document.createElement("div");
  element.id = id;
  parent.appendChild(element);
  return element;
}

//Funcion que hace sticky a la barra de navegacion
var sticky = 1;
window.onscroll = function () {
  f();
};
function f() {
  animated_text.style.opacity = "0%";
  if (window.scrollY >= sticky) {
    div1.classList.add("sticky");
  } else {
    div1.classList.remove("sticky");
  }
}

//#region Animaciones
var logo_anim = anime({
  targets: "#logo",
  keyframes: [{ rotate: "8deg" }, { rotate: "-8deg" }, { rotate: "0deg" }],
  direction: "alternate",
  loop: 0,
  autoplay: false,
  easing: "easeInOutSine",
});
logo.ondblclick = logo_anim.play;
var title_animation = new Typed("#title_text_animation", {
  strings: ["Confianza", "Siempre"],
  typeSpeed: "10",
  backSpeed: "10",
  loop: "true",
  startDelay: "5",
  smartBackspace: false,
  backDelay: "5",
});

var icon1_anim = anime({
  targets: '#calidad_icon',
  keyframes: [{ rotate: "15deg" }, { rotate: "-15deg" }, { rotate: "0deg" }],
  autoplay: false,
  loop: false,
  easing: 'easeInOutSine'
})
calidad_icon.ondblclick = icon1_anim.play;

var icon2_anim = anime({
  targets: '#confianza_icon',
  keyframes: [{ rotate: "15deg" }, { rotate: "-15deg" }, { rotate: "0deg" }],
  autoplay: false,
  loop: false,
  easing: 'easeInOutSine'
})
confianza_icon.ondblclick = icon2_anim.play;

var icon3_anim = anime({
  targets: '#precios_icon',
  keyframes: [{ rotate: "15deg" }, { rotate: "-15deg" }, { rotate: "0deg" }],
  autoplay: false,
  loop: false,
  easing: 'easeInOutSine'
})
precios_icon.ondblclick = icon3_anim.play;

//#endregion

//#region Galeria
let sliderImages = document.querySelectorAll(".slides"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();
//#endregion

//Codigo antiguo comentado por si se tiene que usar o revisar posteriormente
//#region FOOTER
//elementos footer
/*
var boton_facebook = footer.appendChild(document.createElement("img"));
boton_facebook.src = "img/facebookIcon.png";
boton_facebook.id = "boton_fb";
boton_facebook.className = "botones_footer";
boton_facebook.onclick = function () {
  window.location.href = "https://www.facebook.com/cristian.caniulef.5";
};
boton_facebook.style.order = "3"

var boton_Email = footer.appendChild(document.createElement("img"));
boton_Email.src = "img/emailIcon.png";
boton_Email.id = "boton_Email";
boton_Email.className = "botones_footer";
boton_Email.onclick = function () {
  window.open("mailto:marcado.cristian.shippuden@gmail.com");
};
boton_Email.style.order = "2";

var boton_instagram = footer.appendChild(document.createElement("img"));
boton_instagram.src = "img/instagramIcon.png";
boton_instagram.id = "boton_ig";
boton_instagram.className = "botones_footer";
boton_instagram.onclick = function () {
  window.location.href = "https://www.instagram.com/caniulefc/";
};
boton_instagram.style.order = "4"
^*/
/*
var maps_frame = document.getElementById("Maps_Frame");
footer.appendChild(maps_frame);
maps_frame.id = "maps_frame";
maps_frame.style.order = "7"

var text_footer = footer.appendChild(document.createElement("p"));
text_footer.innerHTML = "Mercado Cristian";
text_footer.id = "titulo_footer";
text_footer.style.order = "1";

var frase_inspiradora = footer.appendChild(document.createElement("p"));
frase_inspiradora.innerHTML = "<q>Tu mejor profesor es tu mayor error</q>";
frase_inspiradora.id = "texto_footer";
frase_inspiradora.style.order = "5"

var coordenadas = footer.appendChild(document.createElement("p"));
coordenadas.innerHTML = "-38.98402717141526, -68.14075681438644";
coordenadas.id = "coordenadas";
coordenadas.style.order = "6";
*/
//#endregion

//#region Creacion de parent divs
/*
//Creo los divs padres
const div1 = addDiv("body", "div1");
const div2 = addDiv("body", "div2");
const div3 = addDiv("body", "div3");
const div4 = addDiv("body", "div4");
const div5 = addDiv("body", "div5");

//Los coloco dentro de un array
const divs = [div1, div2, div3, div4, div5];

//Recorro el array y a cada div le asigno la clase "parent_containers" para estilizarlos
divs.forEach(function (item) {
  item.className = "parent_containers";
});
*/
//#endregion

//#region  Barra de navegacion
/*
const navbar_element1 = div1.appendChild(document.createElement("a"));
navbar_element1.innerHTML = "<i>Inicio</i>";
navbar_element1.href = "#div2";
navbar_element1.style.order = "3";
const navbar_element2 = div1.appendChild(document.createElement("a"));
navbar_element2.innerHTML = "<i>Nosotros</i>";
navbar_element2.href = "#div3";
navbar_element2.style.order = "4";
const navbar_element3 = div1.appendChild(document.createElement("a"));
navbar_element3.innerHTML = "<i>Imagenes</i>";
navbar_element3.href = "#div4";
navbar_element3.style.order = "5";
const navbar_elements = [navbar_element1, navbar_element2, navbar_element3];
navbar_elements.forEach(function (item) {
  item.className = "navbar_elements";
});
//Logo barra de navegacion
const logo = div1.appendChild(document.createElement("img"));
logo.src = "img/logo1.png";
logo.id = "logo";

var animated_text = div1.appendChild(document.createElement("i"));
animated_text.id = "animated_text";
animated_text.innerHTML = "";
animated_text.style.order = "2";
*/
//Funcion que hace a la barra de navegacion Sticky

//#endregion

//#region Elementos hijos de los divs

//#region Div2

//Añado un div para el gradient
/*var gradient_bg = addDiv("div2", "bg_gradient");

//Añado el titulo al div 2
var title_text = div2.appendChild(document.createElement("p"));
title_text.id = "title_text";
title_text.innerHTML = 'Tu mercado de <span id="title_text_animation"></span>.';
*/
//#endregion

//#region Div3
//Añado un div al div 3 para colocar el cartel con la info de nosotros

//#endregion

//#region Div4
//Añado la ilustracion SVG al div4
/*
var illus_svg = div4.appendChild(document.getElementById("illustration_svg"));

//Añado un div al div4 para mostrar la imagen
var subdiv = addDiv("div4", "subdiv4");
//Añado un texto arriba de la galeria
var gallery_text = div4.appendChild(document.createElement("p"));
gallery_text.classList.add("gallery_text");
gallery_text.textContent = "Galeria de fotos";
*/
//#endregion

//#region Div5
//Creo el footer dentro del div 5
/*
var footer = div5.appendChild(document.createElement("footer"));
footer.id = "footer";

//Creo 3 divs dentro del div 5 para los iconos
var calidad_icon = addDiv("div5", "calidad_icon");
var confianza_icon = addDiv("div5", "confianza_icon");
var precios_icon = addDiv("div5", "precios_icon");
var icons = [precios_icon, confianza_icon, calidad_icon];
icons.forEach((item) => {
  item.className = "icons";
});
*/
//#endregion

//#endregion