
//Variables de color
const color1 = "#DFC84F"
const color2 = "#080808"

document.body.id = "body";
document.body.style = "display: grid;"

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
    item.style = "width: 100%; height: 1200px;"
})

//NAVBAR
div1.style = "width: 100%; overflow: hidden; background-color: #080808; height: 130px;  overflow: hidden; display: flex;"
const navbar_element1 = div1.appendChild(document.createElement('a'));navbar_element1.innerHTML = "Inicio";
const navbar_element2 = div1.appendChild(document.createElement('a'));navbar_element2.innerHTML = "Nosotros"
const navbar_element3 = div1.appendChild(document.createElement('a'));navbar_element3.innerHTML = "Ubicacion"
const navbar_element4 = div1.appendChild(document.createElement('a'));
const navbar_elements = [navbar_element1, navbar_element2, navbar_element3, navbar_element4];


div2.style = "height: calc(100vh - 130px); position: relative;"



window.onscroll = function(){f()}
var sticky = div1.offsetTop;
function f(){
    if (window.scrollY >= sticky) {
        div1.classList.add("sticky");
    }else{
        div1.classList.remove("sticky");
    }
}


