

    function encode() {
        let str = document.getElementById("mensaje").value; 
        let key = parseInt(document.getElementById("key").value);
        let messageCode= window.cipher.encode(str,key);
            document.getElementById("codificado").innerHTML;
    }

    function decode() {
        let str = document.getElementById("mensaje").value; 
        let key = document.getElementById("key").value;    
    }
