
window.cipher = {
  encode: (mensajeIngresado, desplazamiento) => {

   let codificado='';
   
   for ( let i=0; i<mensajeIngresado.length;i++){
          
          let transformacion = mensajeIngresado.charCodeAt(i);

            if (mensajeIngresado.charAt(i)>=65 && mensajeIngresado.charAt(i) <=90) {
            codificado += String.fromCharCode((transformacion -65+desplazamiento) % 26+65);
     
          } else if (mensajeIngresado.charAt(i)>=97 && mensajeIngresado.charAt(i)<=122) {
            codificado += String.fromCharCode((transformacion -97+desplazamiento) % 26+97);

          }else {
	        	codificado += mensajeIngresado.charAt(i);
       
           
          } return codificado;
   }


  },
  decode: () => {

    
  

    
 
  }
}