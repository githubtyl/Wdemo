// JavaScript Document
(document.getElementById ? DOMCapable = true : 

DOMCapable = false);
function hide(menuName)
{
if (DOMCapable)               
{
var theMenu = document.getElementById(menuName

+"choices");
theMenu.style.visibility = 'hidden';         
}
}

function show(menuName)           
{
if (DOMCapable)
{
var theMenu = document.getElementById(menuName

+"choices");
theMenu.style.visibility = 'visible';     
}
}