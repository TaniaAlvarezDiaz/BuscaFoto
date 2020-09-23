# BuscaFoto
## Gijón: escultura pública en el litoral

El objetivo de este juego es localizar en el mapa de Gijón 10 esculturas públicas distribuidas por la ciudad asturiana obtiendo un mínimo de <b>50 puntos sobre 100</b>.

El juego consta de <b>10 rondas</b>. En cada una de ellas se debe localizar la escultura que se muestra a la derecha de la pantalla haciendo click sobre el mapa situado a la izquierda y después sobre el botón \"Confirmar\".

A continuación, se muestra en el mapa la posición real de la escultura y la distancia respecto a la posición seleccionada. Si esta distancia es menor de 50 metros se obtienen 10 puntos; si es menor de 250 se obtienen 8 puntos; si es menor de 450 se obtienen 5 puntos; si es menor de 650 se obtienen 3 puntos; y si es mayor de 650 metros no puntúa.

Además, se puede <b>consultar información sobre la escultura</b> localizada pulsando sobre el marcador de la escultura.

Para pasar a la siguiente ronda, se debe pulsar el botón \"Siguiente ronda\".

Al finalizar la partida, se mostrará la <b>puntuación final</b>. Asimismo, se podrá iniciar una nueva partida pulsando sobre el botón correspondiente.

## Ejecución

1. Añadir en el fichero <b>index.html</b> la API KEY para invocar el servicio de Google Maps.

    ``` <script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap&key=API_KEY&libraries=geometry"></script>```
    
2. Abrir el fichero <b>index.html</b> en un navegador web. Se recomienda el uso de <b>Google Chrome</b>.
