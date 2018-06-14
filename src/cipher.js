window.cipher = {
  encode: (mensajeIngresado,desplazamiento) => {

   let codificado="";
   
   for ( let i=0; i<mensajeIngresado.length;i++){ //bucle
          
          let transformacion = mensajeIngresado.charCodeAt(i); //convierte mensaje en ascii

            if (transformacion >= 65 && transformacion <= 90) { 
            codificado += String.fromCharCode((transformacion -65 + desplazamiento) %26+65); 
           
          }else if(transformacion >= 97 && transformacion <= 122){
            codificado += String.fromCharCode((transformacion -97 + desplazamiento) %26+97);
    
          } else { codificado += String.fromCharCode(transformacion); // para otros caracteres

          } 
         
   } return codificado;


  },
  
  decode: (mensajeCodificado,desplazamiento) => {

    let codificado="";
   
    for ( let i=0; i<mensajeCodificado.length;i++){ //bucle
           
           let transformacion2 = mensajeCodificado.charCodeAt(i); //convierte mensaje en ascii
 
             if (transformacion2 >= 65 && transformacion2 <= 90) { 
             codificado += String.fromCharCode((transformacion2 +65 - desplazamiento) %26+65); 
            
           }else if(transformacion2 >= 97 && transformacion2 <= 122){
             codificado += String.fromCharCode((transformacion2 +97 - desplazamiento) %26+97);
     
      
           } else { codificado += String.fromCharCode(transformacion2); // para otros caracteres
 
           } 
          
    } return codificado;

    

  }
}

