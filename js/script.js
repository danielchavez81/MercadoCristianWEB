//Variables de color
const color1 = "#DFC84F";
const color2 = "#080808";

document.body.id = "body";
document.body.style = "display: grid"

function addDiv(IDpadre, id){
    let parent = document.getElementById(IDpadre);
    let element = document.createElement("div");
    element.id = id;
    parent.appendChild(element);
    return element;
}

const div1 = addDiv("body", "div1");
const div2 = addDiv("body", "div2");
const div3 = addDiv("body", "div3");
const div4 = addDiv("body", "div4");
const div5 = addDiv("body", "div5");

const divs = [div1, div2, div3,div4,div5]

divs.forEach(function(item){
    item.className = "parent_containers";
})

//NAVBAR
const navbar_element1 = div1.appendChild(document.createElement('a'));navbar_element1.innerHTML = "Inicio"; navbar_element1.href = "#";navbar_element1.style.order = "2"
const navbar_element2 = div1.appendChild(document.createElement('a'));navbar_element2.innerHTML = "Nosotros"; navbar_element2.href = "#";navbar_element2.style.order = "3"
const navbar_element3 = div1.appendChild(document.createElement('a'));navbar_element3.innerHTML = "Ubicacion"; navbar_element3.href = "#"; navbar_element3.style.order = "4"
const navbar_elements = [navbar_element1, navbar_element2, navbar_element3];
navbar_elements.forEach(function (item) {
    item.className = "navbar_elements"    
})
const logo =  div1.appendChild(document.createElement('img'))
logo.src = "img/logo1.png";
logo.id = "logo";

//INICIO


window.onscroll = function(){f()}
var sticky = div1.offsetTop;
function f(){
    if (window.scrollY >= sticky) {
        div1.classList.add("sticky");
    }else{
        div1.classList.remove("sticky");
    }
}

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

