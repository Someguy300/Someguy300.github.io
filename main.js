var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var valores = '{ "skills" : [' +
'{"html":40},' +
'{"css":25},' +
'{"js":10} ]}';

var obj = JSON.parse(valores);

function move(){
    moveHTML();
    moveCSS();
    moveJS();
}

var i = 0;
function moveHTML() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("html");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= obj.skills[0].html) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
    document.getElementById("html").innerHTML = "HTML: "+obj.skills[0].html+"%";
}

var x = 0;
function moveCSS() {
    if (x == 0) {
        x = 1;
        var elem = document.getElementById("css");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= obj.skills[1].css) {
                clearInterval(id);
                x = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
    document.getElementById("css").innerHTML = "CSS: "+obj.skills[1].css+"%";
}

var y = 0;
function moveJS() {
    if (y == 0) {
        y = 1;
        var elem = document.getElementById("js");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= obj.skills[2].js) {
                clearInterval(id);
                y = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
    document.getElementById("js").innerHTML = "JS: "+obj.skills[2].js+"%";
}



function sendForm() {
    var name = document.forms["formulario"]["nombre"].value;
    var mail = document.forms["formulario"]["correo"].value;
    var mensaje = document.forms["formulario"]["sujeto"].value;
    console.log(
        "Nombre: "+name+"\n"+
        "Correo: "+mail+"\n"+
        "Mensaje: "+mensaje
    );
    alert("su solicitud ha sido enviada");
  }