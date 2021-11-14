//Ajustes al body
document.body.id = "body";
document.body.style = "display: grid; background-color:rgb(238, 204, 51);"

//Funcion para crear divs, parametros: id del padre, id propia del div
function addDiv(IDpadre, id){
    let parent = document.getElementById(IDpadre);
    let element = document.createElement("div");
    element.id = id;
    parent.appendChild(element);
    return element;
}

//#region Creacion de parent divs
//Creo los divs padres
const div1 = addDiv("body", "div1");
const div2 = addDiv("body", "div2");
const div3 = addDiv("body", "div3");
const div4 = addDiv("body", "div4");
const div5 = addDiv("body", "div5");

//Los coloco dentro de un array
const divs = [div1, div2, div3,div4,div5]

//Recorro el array y a cada div le asigno la clase "parent_containers" para estilizarlos
divs.forEach(function(item){
    item.className = "parent_containers";
})
//#endregion

//#region  Barra de navegacion
const navbar_element1 = div1.appendChild(document.createElement('a'));navbar_element1.innerHTML = "<i>Inicio</i>"; navbar_element1.href = "#div2";navbar_element1.style.order = "2"
const navbar_element2 = div1.appendChild(document.createElement('a'));navbar_element2.innerHTML = "<i>Nosotros</i>"; navbar_element2.href = "#div3";navbar_element2.style.order = "3"
const navbar_element3 = div1.appendChild(document.createElement('a'));navbar_element3.innerHTML = "<i>Imagenes</i>"; navbar_element3.href = "#div4"; navbar_element3.style.order = "4"
const navbar_elements = [navbar_element1, navbar_element2, navbar_element3];
navbar_elements.forEach(function (item) {
    item.className = "navbar_elements"    
})
//Logo barra de navegacion
const logo =  div1.appendChild(document.createElement('img'))
logo.src = "img/logo1.png";
logo.id = "logo";

//Funcion que hace a la barra de navegacion Sticky
var sticky = div1.offsetTop;
window.onscroll = function(){f()}
function f(){
    if (window.scrollY >= sticky) {
        div1.classList.add("sticky");
    }else{
        div1.classList.remove("sticky");
    }
}
//#endregion

//#region Elementos hijos de los divs

    //#region Div2
    //Añado el vector adentro de el div 2
    var svg_wave = document.getElementById("wave_svg");
    div2.appendChild(svg_wave);

    //Añado el titulo al div 2
    var title_text = div2.appendChild(document.createElement('p'));
    title_text.id = "title_text";
    title_text.innerHTML = "Tu mercado de <span>confianza</span>.";
    //#endregion
    
    //#region Div3
    //Añado un div al div 3 para colocar el cartel con la info de nosotros
    var about_div = addDiv("div3", "about_div");
    var p1 = about_div.appendChild(document.createElement('p')); p1.innerHTML = "Lörem ipsum proling nibås sedan paras danseoke. Reryling prosöska. Nålar anastik lykiligen ifall.";
    var p2 = about_div.appendChild(document.createElement('p')); p2.innerHTML = "Preskapet fåde vysk: som hasuse en infrade. Kavis prosa viren fastän gigalyr pede. Jer dingen. Maskapet kabel decin i vas att vas.";
    //#endregion
    
    //#region Div4
    //Añado la ilustracion SVG al div4
    var illus_svg = div4.appendChild(document.getElementById("illustration_svg"))

    //Añado un div al div4 para mostrar la imagen
    var subdiv = addDiv("div4", "subdiv4");
    //Añado un texto arriba de la galeria
    var gallery_text = div4.appendChild(document.createElement('p'));
    gallery_text.classList.add("gallery_text");
    gallery_text.textContent = "Galeria de fotos";
    //#endregion
    
    //#region Div5
    //Creo el footer dentro del div 5
    var footer = div5.appendChild(document.createElement('footer'));
    footer.id = "footer"

    //Creo 3 divs dentro del div 5 para los caracteristicas
    var calidad_icon = addDiv("div5", "calidad_icon");
    var confianza_icon = addDiv("div5", "confianza_icon");
    var precios_icon = addDiv("div5", "precios_icon");
    var icons = [precios_icon, confianza_icon, calidad_icon]
    icons.forEach((item)=>{
        item.className = "icons";
    })
    //#endregion

//#endregion

//#region Animaciones
var logo_anim = anime({
    targets: '#logo',
    keyframes:[
        {rotate: '8deg'},
        {rotate: '-8deg'},
        {rotate: '0deg'},
    ],
    direction: 'alternate',
    loop: 0,
    autoplay: false,
    easing: 'easeInOutSine'
})
logo.ondblclick = logo_anim.play;
//#endregion

//#region Galeria
document.querySelectorAll(".g").forEach((el)=>{
   div4.appendChild(el);
})
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