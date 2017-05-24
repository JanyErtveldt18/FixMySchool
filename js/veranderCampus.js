console.log("test javascript");

 var actieveCheck = 0;
 var aantalChecks = document.getElementsByClassName('check');
var lijstItems = $(".test");
voegCheckToe();
  
  
  



  /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


  function voegCheckToe(el) {
      
   for (i = 0; i < 5; i++) { 
       lijstItems[i].onclick =function(){
         for(n = 0; n < 5; n++) { 
         aantalChecks[n].style.display = 'none';
         console.log("ja");}
         console.log("ID" +this.id);
         console.log("I"+i);
         
          aantalChecks[this.id].style.display = 'block';
       }
        
    }

    
  
  }
