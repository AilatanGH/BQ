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

// VALIDATE FORM

var inputName = document.getElementById("name");
var inputEmail = document.getElementById("mail");
var btnSend = document.getElementById("btn-send");
var textSend = document.getElementById("text-send");

function validateForm () {
  var name = inputName.value;
  var email = inputEmail.value;
  var emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(name === "" || email === "" || !emailTest.test(email)) {
      textSend.innerHTML = "Revise los campos";
			return false;
  } else {
		textSend.innerHTML = "¡Gracias! su solicitud se ha<br>enviado correctamente";
		form.reset()
  }
		window.setTimeout(function() {
			textSend.innerHTML = "";
		}, 3000);
}

btnSend.addEventListener("click", validateForm);
