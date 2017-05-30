var dt = new Date();
var kijkenOfDeLocalStorageLeeg = localStorage.getItem("hierWordtHetOnderwerpInOpgeslagen");

if (!kijkenOfDeLocalStorageLeeg) {
  console.log("Er is niets in de localStorage opgeslagen, dus er komt geen nieuwe klacht bij!");
  window.location = "klachten.html";
} else {
  console.log("Verder funcities gaan uitgevoerd worden");
  vulBeschrijving();
}


function vulBeschrijving(){

 document.getElementById("hierKomtHetOnderwerp").innerHTML = '<h1>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '</h1>';
  
}


/*

<div id="contentDiv">
			<div id="hierKomtHetOnderwerp"></div>
            <div id="hierKomtHetGebouw"></div>
            <div id="campusTekst"></div>
			<div>02/06/2017 - 15u20</div>
			<p id="hierKomtDeBeschrijving"></p>
			<img id="foto" src="">
			<p id="pstatus">Status: In behandeling</p>
			<img id="circle" src="../img/Circleoranje.svg">
		</div>
        
*/



