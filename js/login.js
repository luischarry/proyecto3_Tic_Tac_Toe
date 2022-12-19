function login() {
    var jugador1 = document.getElementById("jugador1").value;
    var jugador2 = document.getElementById("jugador2").value;
    if(jugador1 && jugador2){
        localStorage.setItem("jugador1",jugador1);
        localStorage.setItem("jugador2",jugador2);

        window.open("../html/tablero.html", "_self");
        document.getElementById("jugador1").value = "";
        document.getElementById("jugador2").value = "";
    }else{
        alert("Los nombres de los jugadores no pueden quedar vacios");
    }v

}