'use strict';

var menuSmall= document.getElementById("menu-small");
var btnSubnav = document.getElementById("btn-subnav");
var subNav = document.getElementById("subnav");
var subDataIcon = document.getElementById("subnav-img");

//Mostrar y ocultar submenú de datos en versión móvil
function openCloseSubNavData(){
	subNav.classList.toggle("subnav-show");
	subDataIcon.classList.toggle("subnav-img-rotate");
}

btnSubnav.addEventListener("click",openCloseSubNavData);
