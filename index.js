function simuladorDeAventuras() {
    alert("¡Bienvenido al Bosque de las Aventuras!");

    let continuar = true;

    while (continuar) {
        let respuesta = prompt("Estás en un sendero en el bosque. ¿Querés ir a la izquierda o a la derecha?").toLowerCase();

        if (respuesta === "izquierda") {
            respuesta = prompt("Te encontrás con un río. ¿Querés nadar o buscar un puente?").toLowerCase();

            if (respuesta === "nadar") {
                alert("Nadaste a través del río y llegaste al otro lado de forma segura.");
            } else if (respuesta === "buscar un puente") {
                alert("Encontraste un puente y cruzaste el río sin problemas.");
            } else {
                alert("Opción no válida. Te perdiste en el bosque.");
            }
        } else if (respuesta === "derecha") {
            respuesta = prompt("Encontrás un cofre. ¿Querés abrirlo o seguir caminando?").toLowerCase();

            if (respuesta === "abrirlo") {
                alert("El cofre estaba lleno de alacranes venenosos. ¡Perdiste una vida!");
            } else if (respuesta === "seguir caminando") {
                alert("Decidiste seguir caminando en busca de más aventuras.");
            } else {
                alert("Opción no válida. Algo extraño sucedió.");
            }
        } else {
            alert("Opción no válida. No sabemos qué hacer en esta situación.");
        }

        continuar = confirm("¿Querés continuar la aventura?");

        if (!continuar) {
            alert("Gracias por jugar en el Bosque de las Aventuras. ¡Hasta la próxima!");
        }
    }
}

simuladorDeAventuras();
