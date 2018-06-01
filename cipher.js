
window.cipher = {
  encode: (mensajeIngresado, desplazamiento) => {

    codificado:"";
   
   for ( let i=0; i<str.length;i++){
          
         let transformacion = mensajeIngresado.charCodeAt(i);

            if (srt >= 65 && str <= 90) {
            codificado += String.fromCharCode((transformacion - 65 + key) % 26 + 65);
     
          } else if (srt >= 97 && str <= 122) {
            codificado += String.fromCharCode((transformacion - 65 + key) % 26 + 65);
       
         
          } return codificado;
   }


  },
  decode: (str, key) => {

    messageDecode:"";
  

    
 
  }
}