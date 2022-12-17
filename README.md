# Proyecto 3
## Juego del 3 en raya

* Realizo un juego del 3 en raya funcional con determinados parámetros:
1) Poder jugar 2 jugadores.
2) Cada jugador dispondrá solo de 3 fichas, las cuales una vez colocadas en el tablero podrán quitarse y situarse nuevamente en cualquier otro espacio vacio del tablero.
3) Las casillas ocupadas no se pueden sobreescribir.
4) Tener un botón de reinicio, que limpiará el tablero pero no el marcador.

* El proyecto cuenta con 3 páginas **Index**, **jugadores**, **tablero** que son responsive con boostrap. 
[index]
* Nos da la bienvenida al juego con su respectivo logo .
* Opciones de jugar: jugador vs CPU o judador vs jugador.
[jugadores]

* Utilizo **seccionstorage** para almacenar los nombres en un js que luego se traslada a la página del tablero

[tablero]
* El tablero esta conformado por **div** que tiene el evento onclick y lo envía a nuestro fichero (js), en él cual lo almacenamos, comprobamos, y validamos el poder jugar.

## como jugar 
* Una vez cada jugador ha insertado su correspondiente nombre, este aparecerá en la parte superior con su correspodiente ficha asignada: X o O.
### primera fase
* Las X cuenta con 3 fichas y las O cuenta con 3 fichas.
* Cada jugador deberá colocar sus fichas en el tablero intentando resultar ganador. 
* Un espacio en el tablero no puede ocuparse por 2 fichas.
### segunda fase
* Una vez que cada jugador haya puesto sus 3 fichas y ninguno haya ganado, por turnos comenzando X tendrá la opcion de quitar una de sus fichas y ponerla nuevamente en un espacio libre, si con el siguiente movimiento no ha ganado, el turno será para el jugador O que podrá quitar una de sus fichas y ponerla en un espacio libre.
### tercera fase
* En el momento en que alguno gane se le sumará al contador la victoria, dando la opción de reinciar el tablero para una revancha.

[futuras_versiones]
* En próximas actualizaciones se implementará el jugador vs CPU.