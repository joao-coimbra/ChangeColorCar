// Funções para mudanças de cor em diversas partes do carro

  // carcaça
function changeColor(color) {
  var material = document.getElementById('body_color');
  material.setAttribute("diffuseColor", color);
}

  // textura rodas
function changeTexture(tex) {
  var wheel = document.getElementById('rim_tex');
  wheel.setAttribute("url", tex);
}

  // maçaneta
function changeMacaneta(color) {
  var material = document.getElementById('macaneta');
  material.setAttribute("diffuseColor", color);
}
  
// Funções para desabilitar um botão já clicado para não criar um flop e habilitar o botão posterior

function disableButton1() {
  document.getElementById("Btncar").disabled = true ;
}

function disableButton2() {
  document.getElementById("Btnwheel").disabled = true ;
}

function enableButton1(){
  document.getElementById("Btncar").disabled = false ;
}

function enableButton2(){
  document.getElementById("Btnwheel").disabled = false ;
}

// Funções para mostrar e ocultar cada section

function hideSection1(){
  var select = document.getElementById('box-change-color');
  select.style.display = 'none';
}

function hideSection2(){
  var section = document.getElementById('box-change-wheel');
  section.style.display = 'none';
}

function showSection1(){
  var section = document.getElementById('box-change-color');
  section.style.display = 'block';
}

function showSection2(){
  var section = document.getElementById('box-change-wheel');
  section.style.display = 'table';
}