
window.cipher = {
  encode: (str, key, messageCode) => {

    messageCode:"";

   for ( let i=0; i<str.length;i++){
      let messageCode = str.charCodeAt(i);

        if (srt >= 65 && str <= 90) {
        messageCode += String.fromCharCode((str - 65 + key) % 26 + 65);

        return messageCode = document.getElementById("codificado").innerHTML;
      }
   }


  },
  decode: () => {

    messageCode:"";

    for ( let i=0; i<str.length;i++){
       let messageCode = str.charCodeAt(i);
 
         if (srt >= 65 && str <= 90) {
         messageCode += String.fromCharCode((26 - key) % 26 );
 
         return messageCode = document.getElementById("decodificado").innerHTML;
       }
    }
 
  }
}