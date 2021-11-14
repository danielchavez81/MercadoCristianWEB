//Variables de color
const color1 = "#DFC84F";
const color2 = "#080808";

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

/*-------------------------------------------CREACION DE ELEMENTOS Y FUNCIONALIDAD-----------------------------------------------*/ 
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

//Barra de navegacion
const navbar_element1 = div1.appendChild(document.createElement('a'));navbar_element1.innerHTML = "Inicio"; navbar_element1.href = "#";navbar_element1.style.order = "2"
const navbar_element2 = div1.appendChild(document.createElement('a'));navbar_element2.innerHTML = "Nosotros"; navbar_element2.href = "#";navbar_element2.style.order = "3"
const navbar_element3 = div1.appendChild(document.createElement('a'));navbar_element3.innerHTML = "Ubicacion"; navbar_element3.href = "#"; navbar_element3.style.order = "4"
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

//Añado el vector adentro de el div 2
var svg_wave = document.getElementById("wave_svg");
div2.appendChild(svg_wave);

//Añado el titulo al div 2
var title_text = div2.appendChild(document.createElement('p'));
title_text.id = "title_text";
title_text.innerHTML = "Tu mercado de <span>confianza</span>.";

//Añado un div al div 3 para colocar el cartel con la info de nosotros
var about_div = addDiv("div3", "about_div");
var p1 = about_div.appendChild(document.createElement('p')); p1.innerHTML = "Lörem ipsum proling nibås sedan paras danseoke. Reryling prosöska. Nålar anastik lykiligen ifall.";
var p2 = about_div.appendChild(document.createElement('p')); p2.innerHTML = "Preskapet fåde vysk: som hasuse en infrade. Kavis prosa viren fastän gigalyr pede. Jer dingen. Maskapet kabel decin i vas att vas.";

//Añado un div al div4 para mostrar la imagen
var subdiv = addDiv("div4", "subdiv4");



/*------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------ANIMACIONES DE LOS ELEMENTOS CREADOS--------------------------------------------*/ 
//Animacion doble click sobre el logo
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






//Texto animado al cargar la pagina
