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
  document.getElementById("mijnklachtenlijst").innerHTML = '<div class="grijzeKleur"><li><span>' + dt.getDate() + "/0" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + '</span>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '<span>'+localStorage.getItem("hierWordtHetGebouwInOpgeslagen")+"."+localStorage.getItem("hierWordtHetLokaalInOpgeslagen")+'</span><img src="../img/Information.svg" alt=""><img src="../img/roodbol.svg" alt=""></li></div>';
  
  
}


/*
<ul id="mijnklachtenlijst">

            <a href="klachtenbeschrijving.html">
			<div id="grijs">
				<li> <span>23/05/2017</span> Lamp kapot <span>B.208</span>
					<img src="../img/Information.svg" alt="">
					<img src="../img/roodbol.svg" alt="">
				</li>
			</div>
                </a>

		</ul>
        */