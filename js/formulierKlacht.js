var onderwerp = '';
var campus = '';
var gebouw = '';
var lokalen = '';
var beschrijving = '';
function saveInLocalStorage(){
  onderwerp = document.getElementById("onderwerpTekst").value;
  campus = document.getElementById("campusTekst").value;
  gebouw = document.getElementById("gebouwTekst").value;
  lokalen = document.getElementById("lokalenTekst").value;
  beschrijving = document.getElementById("beschrijvingTekst").value; 
  
  
  console.log(onderwerp);
  console.log(campus);
  console.log(gebouw);
  console.log(lokalen);
  console.log(beschrijving);
  
  localOpslaan();
}


function localOpslaan() {
    if (typeof (Storage) !== "undefined") {
      
      localStorage.setItem('hierWordtHetOnderwerpInOpgeslagen', onderwerp);
      localStorage.setItem('hierWordtDeCampusInOpgeslagen', campus);
      localStorage.setItem('hierWordtHetGebouwInOpgeslagen', gebouw);
      localStorage.setItem('hierWordtHetLokaalInOpgeslagen', lokalen);
      localStorage.setItem('hierWordtDeBeschrijvingInOpgeslagen', beschrijving);
  
    } else {
      console.log("fail");
    }
  }

document.getElementById("submit").disabled = true;
document.getElementById("submit").style.opacity = "0.5";



function controleOnderwerpEnBeschrijving(){
    var onderwerp = checkOnderwerp();
    var beschrijving = checkBeschrijving();
    
    if(onderwerp == true && beschrijving == true){
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").style.opacity = "1";
    }else{
      console.log("Er is een textfield fout!")
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").style.opacity = "0.5";
    }
}

function checkOnderwerp(){
   var waardeOnderwerp = document.getElementById("onderwerpTekst").value;
    console.log(waardeOnderwerp);
    var lengteOnderwerp = waardeOnderwerp.length;
    
   
    if(lengteOnderwerp >= 2){
       //https://stackoverflow.com/questions/3532053/regular-expression-for-only-characters-a-z-a-z
      if(waardeOnderwerp = waardeOnderwerp.match(/^[a-z]+$/i)){
         
          console.log("Het onderwerp die u gaf voldoet aan de regels")
        return true;
      }else{
          console.log("Fout onderwerp")
          return false;
      }
    }
}
function checkBeschrijving(){
   var waardeBeschrijving = document.getElementById("beschrijvingTekst").value;
    console.log(waardeBeschrijving);
    var lengteBeschrijving = waardeBeschrijving.length;
    
   
    if(lengteBeschrijving >= 2){
  //Bron voor regex: https://stackoverflow.com/questions/13946651/matching-special-characters-and-letters-in-regex
      if(waardeBeschrijving = waardeBeschrijving.match(/^[a-zA-Z]+(([\'\,\.\-_ \/)(:][a-zA-Z_ ])?[a-zA-Z_ .]*)*$/)){
         
          console.log("De beschrijving die u gaf voldoet aan de regels")
        return true;
      }else{
          console.log("Foute beschrijving")
          return false;
      }
    }
}

  