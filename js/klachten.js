var dt = new Date();
var kijkenOfDeLocalStorageLeeg = localStorage.getItem("hierWordtHetOnderwerpInOpgeslagen");

if (!kijkenOfDeLocalStorageLeeg) {
  console.log("Er is niets in de localStorage opgeslagen, dus er komt geen nieuwe klacht bij!");
} else {
  klachtBijvoegen();
}

function klachtBijvoegen(){
   // Bron voor datum van vandaag 
  // https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
  document.getElementById("klachtenlijstLocalStorage").innerHTML = '<div class="grijzeKleur"><a href="klachtenbeschrijvingLocalStorage.html"><li><span>' + dt.getDate() + "/0" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + '</span>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '<span>B.208</span><img src="../img/Information.svg" alt=""><img src="../img/groenbol.svg" alt=""></li></a></div>';
  
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

