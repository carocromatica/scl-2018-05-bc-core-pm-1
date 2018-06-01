window.cipher = {
  encode: (mensajeIngresado,desplazamiento) => {

   let codificado='';
   
   for ( let i=0; i<mensajeIngresado.length;i++){ //bucle
          
          let transformacion = mensajeIngresado.charCodeAt(i); //convierte mensaje en ascii

            if (transformacion >= 65 && transformacion <= 90) { // por ahora solo mayusculas
            codificado += String.fromCharCode((transformacion - 65 + desplazamiento) % 26+65); //formula
     
          } else { codificado += mensajeIngresado.charCodeAt(i); // para otros caracteres

            
          } console.log(codificado);
          return codificado;
   }


  },
  decode: () => {

    encode: (mensajeCodificado,desplazamiento) => {

      let decodificado='';
      
      for ( let i=0; i<mensajeCodificado.length;i++){ //bucle
             
             let transformacion = mensajeCodificado.charCodeAt(i); //convierte mensaje en ascii
   
               if (transformacion>=65 && transformacion <=90) { // por ahora solo mayusculas
               decodificado += String.fromCharCode((transformacion + 65 - desplazamiento) % 26+65); //formula
        
             } else { decodificado += mensajeIngresado.charCodeAt(i); // para otros caracteres

              

             }console.log(decodificado);
             return decodificado;
      }
   

    

  }
}

}