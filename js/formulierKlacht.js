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



/*


        localStorage.setItem("campus", "campusTekst");
        localStorage.setItem("gebouw", "gebouwTekst");
        localStorage.setItem("lokalen", "lokalenTekst");
        localStorage.setitem("onderwerp", "onderwerpTekst");
        
        */