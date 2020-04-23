function changeColor(color) {
    var material = document.getElementById('body_color');
    material.setAttribute("diffuseColor", color);
  }

 function changeTexture(tex) {
    var wheel = document.getElementById('rim_tex');
    wheel.setAttribute("url", tex);
  }

  function changeMacaneta(color) {
    var material = document.getElementById('macaneta');
    material.setAttribute("diffuseColor", color);
  }
  