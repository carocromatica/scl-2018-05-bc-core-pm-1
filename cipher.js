
window.cipher = {
  encode: (mensajeIngresado, desplazamiento) => {

   let codificado='';
   
   for ( let i=0; i<mensajeIngresado.length;i++){
          
         let transformacion = mensajeIngresado.charCodeAt(i);

            if (mensajeIngresado >=65 && mensajeIngresado <=90) {
            codificado += String.fromCharCode((transformacion -65+key) % 26+65);
     
          } else if (mensajeIngresado >=97 && mensajeIngresado <=122) {
            codificado += String.fromCharCode((transformacion -97+key) % 26+97);
       
           
          } return codificado;
   }


  },
  decode: () => {

    
  

    
 
  }
}