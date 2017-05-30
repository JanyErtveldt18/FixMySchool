var dt = new Date();
var kijkenOfDeLocalStorageLeeg = localStorage.getItem("hierWordtHetOnderwerpInOpgeslagen");
var kijkenOfDeLocalStorageLeeg2 = localStorage.getItem("hierWordtDeCampusInOpgeslagen");
var kijkenOfDeLocalStorageLeeg3 =  localStorage.getItem("hierWordtHetGebouwInOpgeslagen");
var kijkenOfDeLocalStorageLeeg4 =  localStorage.getItem("hierWordtHetLokaalInOpgeslagen");
var kijkenOfDeLocalStorageLeeg5 =  localStorage.getItem("hierWordtDeBeschrijvingInOpgeslagen");
      
     
if (!kijkenOfDeLocalStorageLeeg && !kijkenOfDeLocalStorageLeeg2 && !kijkenOfDeLocalStorageLeeg3 && !kijkenOfDeLocalStorageLeeg4 && !kijkenOfDeLocalStorageLeeg5) {
  console.log("Er is niets in de localStorage opgeslagen, dus er komt geen nieuwe klacht bij!");
} else {
  klachtBijvoegen();
}

function klachtBijvoegen(){
   // Bron voor datum van vandaag 
  // https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
  document.getElementById("klachtenlijstLocalStorage").innerHTML = '<div class="grijzeKleur"><a href="klachtenbeschrijvingLocalStorage.html"><li><span>' + dt.getDate() + "/0" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + '</span>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '<span>'+localStorage.getItem("hierWordtHetGebouwInOpgeslagen")+"."+localStorage.getItem("hierWordtHetLokaalInOpgeslagen")+'</span><img src="../img/Information.svg" alt=""><img src="../img/groenbol.svg" alt=""></li></a></div>';
  
  
}




function dropDown() {
  document.getElementById("dropContent").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropknop')) {

    var dropdowns = document.getElementsByClassName("content");
    console.log(dropdowns);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      if (openDropdown.classList.contains('.show')) {
        openDropdown.classList.remove('.show');
      }
    }
  }
}


