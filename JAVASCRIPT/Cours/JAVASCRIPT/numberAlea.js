    // genere une valeur aléatoire 
    var y = Math.floor(Math.random() * 10 + 1); 
      
    // compte le nombre d'essai
    var essai = 1; 
      
    var element = document.getElementById("button1")
    element= addEventListener("button1",verif);
    
    function verif(){ 
      
   // nombre d'essai par utilisateur  
   var x = document.getElementById("textBox1").value; 
  
   if(x == y) 
   {     
       alert("FELICITATIONS VOUS AVEZ TROUVEZ LE BON NOMBRE !!"
               + essai + " ESSAI(S) "); 
   } 
   else if(x > y) 
   {     
       essai++; 
       alert("OOPS ESSAYE UN PLUS PETIT NOMBRE"); 
   } 
   else
   { 
       essai++; 
       alert("OOPS ESSAYE UN PLUS GRAND NOMBRE") 
   } 
}