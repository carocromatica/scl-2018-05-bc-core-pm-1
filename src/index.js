
    function encode() {
        let mensajeIngresado = document.getElementById("mensajeIngresado").value; 
        let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
        let messageCode= window.cipher.encode(mensajeIngresado,desplazamiento);
            document.getElementById("codificado").innerHTML;
    }

  
