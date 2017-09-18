'use strict';

var menuSmall= document.getElementById("menu-small");
var btnSubnav = document.getElementById("btn-subnav");
var btnMenu = document.getElementById("btn-menu");
var subNav = document.getElementById("subnav");
var navTabs = document.getElementById("nav-tabs");
var subDataIcon = document.getElementById("subnav-img");

// SHOW MENU NAVEGATION

function openCloseNavMenu(){
	navTabs.classList.toggle("nav-show");
}

btnMenu.addEventListener("click",openCloseNavMenu);


// SHOW MENU CATEGORIES

function openCloseSubNavData(){
	subNav.classList.toggle("subnav-show");
	subDataIcon.classList.toggle("subnav-img-rotate");
}

btnSubnav.addEventListener("click",openCloseSubNavData);
