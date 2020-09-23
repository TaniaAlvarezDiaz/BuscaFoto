//-----------------------------------
//           CONSTANTS
//-----------------------------------
const units = {
  METRES: 'metros',
  KM: 'km'
}
const puntuactions = {
  FIRST: 10, 
  SECOND: 8,
  THIRD: 5,
  FOURTH: 3,
  LAST: 0
}
const modals = {
  START: 0, END: 1
}
//-----------------------------------
//           VARIABLES
//-----------------------------------
var map;
var initialZoom = 14;
var maxZoom = 18;
var step = 1;
var totalPunctuation = 0;
var stepPuntuaction = 0;
var distance = 0;
var distanceUnits = units.METRES;
var firstCircleDistance = 50; //metros
var differenceBetweenCircles = 200; //metros
var lastCircleDistance = 800 //metros.
var actualPhoto;
var photos = [
  {name: "Solidaridad", description: "Pepe Noja. 1999. Esta escultura está compuesta por cuatro cilindros de acero inoxidable brillante que se retuercen y anudan entre sí. Con un peso de 300 toneladas, representa una cadena de eslabones que significan unión, pero también libertad, pues cada uno de los eslabones está abierto.", url: "./images/Solidaridad.png", latLong: "43.548910, -5.637672"},
  {name: "Andarín", description: "Miquel Navarro, 1999. Esta escultura realizada en aluminio y compuesta por la unión de diversos elementos geométricos −paralelepípedos, cilindros y pirámides− representa un ser humano estilizado y ligero que parece un juguete. Abstracta y antropomórfica a la vez, parece preguntarnos: “¿Qué es el ser humano, sino geometría?”", url: "./images/Andarin.png", latLong: "43.543015, -5.692491"},
  {name: "Nordeste", description: "Joaquín Vaquero Turcios, 1994. Realizada en acero cortén, esta escultura mural exenta de cuatro metros de alto por cinco de ancho representa la vinculación de Gijón con el mar Cantábrico y con la industria, motor económico de la ciudad asturiana a lo largo del siglo XX. Su estructura está compuesta por diversas superficies lisas, unas superpuestas a otras, con perforaciones irregulares que dejan pasar el viento y la luz del sol.", url: "./images/Nordeste.png", latLong: "43.548142, -5.666397"},
  {name: "Paisaje germinador", description: "Miguel Ángel Lombardía, 1997. Esta escultura realizada en bronce se abre a cualquier lectura: puede representar un ser hecho de magma, un cohete espacial a punto de despegar, un dinosaurio herido, un cíclope e incluso una brújula. De casi tres metros de altura, está muy trabajada, poseyendo detalles insospechados.", url: "./images/Germinador.png", latLong: "43.553527, -5.618908"},
  {name: "Sombras de luz", description: "Fernando Alba, 1998. Conjunto escultórico formado por cuatro planchas rectangulares de cinco metros realizadas en acero cortén, dispuestas verticalmente sobre el terreno, cada una de ellas orientada a uno de los puntos cardinales. Cada una de dichas planchas está perforada en diferentes lugares por círculos de distinto diámetro a través de los cuales penetra la luz, creándose diversos juegos de sombras. Estos círculos también actúan de “ventanas mágicas” a través de las cuales el espectador contempla un trozo de la fachada marítima gijonesa.", url: "./images/Sombras.png", latLong: "43.543989, -5.646090"},
  {name: "Sin título", description: "Herminio Álvarez. 2001. Compuesta por tres piezas de acero (una de acero cortén y las otras dos de acero inoxidable), en esta escultura el autor muestra su preocupación por el equilibrio ingrávido. De la pieza de acero cortén, de 12 metros de altura, cuelga una pieza de acero inoxidable que se mantiene fija en el aire gracias a la fuerza magnética que la “une” a la otra pieza de acero inoxidable que está sujeta al suelo. La obra emana tensión.", url: "./images/SinTitulo.png", latLong: "43.547853, -5.638695"},
  {name: "Cantu los Díes Fuxíos", description: "Adolfo Manzano. 2001. Grupo escultórico realizado en mármol de Macael (Almería) compuesto por nueve bloques rectangulares sobre los que se sitúan cuencos apilados de manera desigual que simbolizan las cosas perdidas que formaron parte de nuestra vida.", url: "./images/Cantu.png", latLong: "43.551745, -5.638629"},
  {name: "Elogio del Horizonte", description: "Eduardo Chillida, 1990. Realizada en hormigón armado, mide 10 metros de altura y pesa 500 toneladas. Sujeta por dos pilares, una elipse abierta representa dos brazos que acogen al viento, cuya música suena en el interior de la escultura. Situada en el Cerro de Santa Catalina, el Elogio parece querer lanzarse a volar.", url: "./images/Elogio.png", latLong: "43.549140, -5.663071"},
  {name: "Homenaje a Galileo Galilei XV", description: "Amadeo Gabino, 1997. Conjunto escultórico de tres metros de altura realizado en acero cortén formado por dos estructuras geométricas semicirculares colocadas de forma oblicua. Cada una de dichas estructuras está compuesta a su vez por diversas planchas soldadas entre sí que se curvan y arquean, dibujando rutas concéntricas que crean un mapa planetario.", url: "./images/Galileo.png", latLong: "43.556727, -5.619479"},
  {name: "Monumento a la Madre del Emigrante", description: "Ramón Muriedas, 1970. Conocida también como “La lloca’l Rinconín”, esta escultura de bronce de cuatro metros de altura representa a una mujer que mira y extiende una de sus manos hacia el mar por el que sus hijos emigrantes han desaparecido. Triste, espera su retorno mientras sufre las inclemencias temporales del mar Cantábrico, como el fuerte viento que encrespa su melena.", url: "./images/Madre.png", latLong: "43.548317, -5.641096"},
];
//Marcadores
var userMarker;
var photoMarker;
//Botones
var newGameBtn;
var nextStepBtn;
var confirmBtn;
var gijon;
//Modal
var modal;
var modalCloseBtn;

//-----------------------------------
//           INICIAR VISTA
//-----------------------------------
window.onload = function() {
  //Cargar elementos
  //Modal
  modal = document.getElementById("modal");
  modalCloseBtn = document.getElementById("modalCloseBtn");
  modalCloseBtn.onclick = function(){
    modal.style.display = "none"
  }
  //Botones
  newGameBtn = document.getElementById("newGameBtn");
  nextStepBtn = document.getElementById("nextStepBtn");
  confirmBtn = document.getElementById("confirmBtn");
  //Iniciar el juego
  newGame();
  //Mostrar modal con las instrucciones del juego
  showModal(modals.START);
};

//-----------------------------------
//           FUNCIONES
//-----------------------------------
/* Función para iniciar una partida */
function newGame() {
  resetButtons();
  resetValues();
  updateStepText()
  updatePunctuations();
  changeImage();
  initMap();
}

/* Función para pasar a la siguiente ronda */
function nextStep() {
  step = step + 1;
  stepPuntuaction = 0;
  //Deshabilitar botones
  resetButtons();
  //Actualizar los textos
  updateStepText()
  updatePunctuations();
  //Ocultar la distancia entre los puntos
  showDistanceBetweenPoints(false);
  //Cambiar la imagen
  changeImage();
  //Iniciar el mapa
  initMap();
}

/* Función para verificar la posición del elemento */
function confirm() {
  //Poner marcador con la posición de la escultura
  putPhotoMarker();
  //Deshabilitar el botón "Comprobar"
  enableDisableButton(confirmBtn, false);
  //Deshabilitar click en el mapa
  google.maps.event.clearListeners(map, 'click');
  //Resetear las opciones del mapa (cambiar el zoom)
  resetMapOptions();
  //Calcular distancia entre los puntos y mostrarla
  calculateDistanciaBetweenPoints();
  //Calcular la puntuación de este turno
  calculateStepPuntuaction();
  //Actualizar puntuaciones
  updatePunctuations();
  //Mostrar círculos concéntricos para representar la distancia
  showConcentricsCircles();
  //Si estamos en la última ronda, habilitar botón "Nueva partida", en caso contrario habilitar botón "Siguiente ronda"
  if (lastStep()) {
    enableDisableButton(newGameBtn, true);
    showModal(modals.END);
  } 
  else enableDisableButton(nextStepBtn, true);
}

/* Función para resetear las opciones del mapa */
function resetMapOptions() {
  map.panTo(photoMarker.position);
  map.setZoom(initialZoom);
}

/* Función para calcular la distancia entre dos puntos */
function calculateDistanciaBetweenPoints() {
  //La distancia se obtiene en metros
  distance = google.maps.geometry.spherical.computeDistanceBetween(photoMarker.position, userMarker.position);
  distanceUnits = units.METRES;
  //Si la distancia es mayor de 1000 metros, la convertimos a km
  if (distance > 1000) {
    distance = distance/1000;
    distanceUnits = units.KM;
  }
  //Redondear distancia a dos decimales
  distance = distance.toFixed(2);
  //Mostrar el texto que indica la distancia entre los puntos
  showDistanceBetweenPoints(true, distanceUnits);
  //Mostrar la polilinea entre los dos puntos
  showPolilyneBetweenPoints();
}

/* Función para calcular la puntuación de la ronda actual */
function calculateStepPuntuaction() {
  var auxDistance = distance;
  //Si la distancia está en km, pasarla a metros
  if (distanceUnits == units.KM) auxDistance = distance * 1000;
  //Calcular la puntuación de la ronda
  if (auxDistance < firstCircleDistance) stepPuntuaction = puntuactions.FIRST;
  else if (auxDistance > firstCircleDistance && auxDistance < calculateCircleDistance(1)) stepPuntuaction = puntuactions.SECOND;
  else if (auxDistance > calculateCircleDistance(1) && auxDistance < calculateCircleDistance(2)) stepPuntuaction = puntuactions.THIRD;
  else if (auxDistance > calculateCircleDistance(2) && auxDistance < calculateCircleDistance(3)) stepPuntuaction = puntuactions.FOURTH;
  else stepPuntuaction = puntuactions.LAST;
}

/* Función para calcular la distancia que hay desde la posición de la foto y el círculo que se pasa por parámetro */
function calculateCircleDistance(numCircle) {
  return firstCircleDistance + (differenceBetweenCircles * numCircle);
}

/* Función para mostrar 4 círculos concéntricos sobre la posición de la escultura  */
function showConcentricsCircles() {
  var i;
  for (i = firstCircleDistance; i < lastCircleDistance; i+= differenceBetweenCircles)
  {
    var circuloOptions = {
      strokeColor: '#f7b86c',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#f7b86c',
      fillOpacity: 0.15,
      map: map,
      center: photoMarker.position,
      radius: i
    };
    var circulo = new google.maps.Circle(circuloOptions);		
  }
}

/* Función para mostrar una línea recta entre dos puntos*/
function showPolilyneBetweenPoints() {
  var polyOptions = {
    path: [photoMarker.position, userMarker.position],
    strokeColor: '#FF0F00 ',
    strokeOpacity: 1.0,
    strokeWeight: 3
  }
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);
}

/* Función para inicializar el mapa */
function initMap() {
  gijon = new google.maps.LatLng(43.544823, -5.655665);
  var misOpciones = {
    center: gijon,
    zoom: initialZoom,
    maxZoom: maxZoom,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true
  };
  
  map = new google.maps.Map(document.getElementById("mapFrame"), misOpciones);

  //Registrar onClick sobre el mapa
  google.maps.event.addListener(map, 'click', function(event) {
     //Pintar el marcador del usuario
     putUserMarker(event.latLng);
     //Habilitar botón "Confirmar"
     enableDisableButton(confirmBtn, true);
	});
}

/* Función para inicializar los botones */
function resetButtons() {
  //Inicialmente aparecen todos deshabilitados
  enableDisableButton(newGameBtn, false);
  enableDisableButton(nextStepBtn, false);
  enableDisableButton(confirmBtn, false);
}

/* Función para colocar el marcador en la posición en la que el usuario hace click */
function putUserMarker(location) {
  //Borrar el marcador del mapa si ya existe
  if (userMarker != undefined) userMarker.setMap(null);
  //Crear el nuevo marcador
  userMarker = new google.maps.Marker({
    position: location, 
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    }
  });
  map.panTo(location);
}  

/* Función para colocar el marcador en la posición donde se encuentra la escultura de la imagen */
function putPhotoMarker() {
  //Borrar el marcador del mapa si ya existe
  if (photoMarker != undefined) photoMarker.setMap(null);
  //Crear el nuevo marcador
  var pos = actualPhoto.latLong.split(",");
  photoMarker = new google.maps.Marker({
    position: new google.maps.LatLng(parseFloat(pos[0]),parseFloat(pos[1])),
    icon: './images/sculpture.png',
    map: map,
    title: actualPhoto.name
  });
  //Registrar onClick sobre el marcador
  photoMarker.addListener('click', function() {
    //Abrir un infowindow
    var info = '<div id="content">'+
                  '<div id="siteNotice"></div>'+
                  '<h1 id="firstHeading" class="firstHeading"><i>' + actualPhoto.name + '</i></h1>'+
                  '<div id="bodyContent">'+
                    '<p style="text-align:justify">'+ actualPhoto.description +'</p>'+
                  '</div>'+
               '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: info
    });
    infowindow.open(map, photoMarker);
  });
}

/* Función para cambiar la imagen */
function changeImage() {
  actualPhoto = photos[step-1];
  document.getElementById("imageFrame").src = actualPhoto.url;
}

/* Función para actualizar el texto que indica la ronda en la que se encuentra el usuario */
function updateStepText() {
  document.getElementById("step").innerHTML = "Ronda " + step + "/10";
}

/* Función para actualizar las puntuaciones */
function updatePunctuations() {
  totalPunctuation = totalPunctuation + stepPuntuaction;
  document.getElementById("totalPuntuaction").innerHTML = "Puntuación total: " + totalPunctuation;
  document.getElementById("stepPuntuaction").innerHTML = "Puntuación de la ronda: " + stepPuntuaction;
}

/* Función para actualizar la distancia entre los puntos */
function showDistanceBetweenPoints(show, units) {
   document.getElementById("distance").innerHTML = show ? "Distancia entre los puntos: " + distance.toString().replace(".", ",") + " " + units : "";
}

/* Función para resetear los valores de los componentes */
function resetValues() {
  step = 1;
  totalPunctuation = 0;
  stepPuntuaction = 0;
  //Ocultar la distancia entre los puntos
  showDistanceBetweenPoints(false);
}

/* Función para habilitar/deshabilitar un botón */
function enableDisableButton(btn, enable) {
  if (btn != undefined) btn.disabled = !enable;
}

/* Función para saber si estamos en el último paso */
function lastStep() {
  if (step == photos.length) return true;
  return false;
}

/* Función para crear una ventana modal */
function showModal(modalType) {
  if (modalType == modals.START){
    document.getElementById("modalInfo").innerHTML = "<h1>BuscaFoto</h1>" +
                                                      "<h2>Gijón: escultura pública en el litoral</h2>" + 
                                                      "<p>El objetivo de este juego es localizar en el mapa de Gijón 10 esculturas públicas distribuidas por la ciudad asturiana obtiendo un mínimo de <b>50 puntos sobre 100</b>.</p>" +
                                                      "<p>El juego consta de <b>10 rondas</b>. En cada una de ellas se debe localizar la escultura que se muestra a la derecha de la pantalla haciendo click sobre el mapa situado a la izquierda y después sobre el botón \"Confirmar\".</p>" + 
                                                      "<p>A continuación, se muestra en el mapa la posición real de la escultura y la distancia respecto a la posición seleccionada. " +
                                                      "Si esta distancia es menor de 50 metros se obtienen 10 puntos; si es menor de 250 se obtienen 8 puntos; si es menor de 450 se obtienen 5 puntos; si es menor de 650 se obtienen 3 puntos; y si es mayor de 650 metros no puntúa.<p/>" + 
                                                      "<p>Además, se puede <b>consultar información sobre la escultura</b> localizada pulsando sobre el marcador de la escultura.</p>" + 
                                                      "<p>Para pasar a la siguiente ronda, se debe pulsar el botón \"Siguiente ronda\".</p>" + 
                                                      "<p>Al finalizar la partida, se mostrará la <b>puntuación final</b>. Asimismo, se podrá iniciar una nueva partida pulsando sobre el botón correspondiente.</p>";
  }else{ 
    if (totalPunctuation < 50)
      document.getElementById("modalInfo").innerHTML = "<h1>La partida ha finalizado</h1>" + 
                                                        "<h2>Ups... No has superado la prueba.</h2>" +
                                                        "<p>Tu puntuación es de <b>" + totalPunctuation + " puntos</b>.</p>" +
                                                        "<p>Está claro que la escultura no es lo tuyo.</p>";
    else if (totalPunctuation == 100)
      document.getElementById("modalInfo").innerHTML = "<h1>La partida ha finalizado</h1>" + 
                                                        "<h2>¡Eres un hacha! ¡Has superado la prueba con la máxima puntuación (100 puntos)!</h2>" +
                                                        "<p>Eres un/a friqui de la escultura, no lo niegues.</p>";
    else
      document.getElementById("modalInfo").innerHTML = "<h1>La partida ha finalizado</h1>" + 
                                                        "<h2>¡Enhorabuena! Has superado la prueba.</h2>" +
                                                        "<p>Tu puntuación es de <b>" + totalPunctuation + " puntos</b>.</p>" +
                                                        "<p>Se nota que sabes de escultura. Sigue así.</p>";
  }
  modal.style.display = "block"
}