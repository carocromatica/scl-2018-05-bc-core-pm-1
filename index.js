
    function encode() {
        let mensajeIngresado = document.getElementById("mensajeIngresado").value; 
        let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
        let codificado= window.cipher.encode(mensajeIngresado,desplazamiento);
            document.getElementById("codificado").innerHTML;
    }

  
    function decode() {
        let mensajeIngresado = document.getElementById("mensajeIngresado").value; 
        let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
        let decodificado= window.cipher.decode(mensajeCodificado,desplazamiento);
            document.getElementById("decodificado").innerHTML;
    }