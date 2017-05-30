var onderwerp = '';
function saveInLocalStorage(){
  onderwerp = document.getElementById("onderwerpTekst").value;
  console.log(onderwerp);

  
  localOpslaan();
}


function localOpslaan() {
    if (typeof (Storage) !== "undefined") {
      
      localStorage.setItem('hierWordtHetOnderwerpInOpgeslagen', onderwerp);
  
    } else {
      console.log("fail");
    }
  }