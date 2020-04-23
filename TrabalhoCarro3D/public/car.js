function changeColor(color) {
    var material = document.getElementById('body_color');
    material.setAttribute("diffuseColor", color);
  }

 function changeTexture(tex) {
		document.getElementById('rim_tex').setAttribute("url", tex);
	}
  