// JavaScript Document
function isNumberInput(field, event) 
{
  var key, keyChar;
  if (window.event)  key = window.event.keyCode; 
  else if (event)  key = event.which;
  else  return true;

  if (key == null || key == 0 || key == 8 || key == 13 || key == 27)
    return true;
  keyChar =  String.fromCharCode(key);
  if (/\d/.test(keyChar)) {            
     window.status = "";
     return true;
  } 
  else {
    window.status = "������ֻ������������"; 
    return false;
   }
}

