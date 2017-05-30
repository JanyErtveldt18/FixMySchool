var dt = new Date();
var kijkenOfDeLocalStorageLeeg = localStorage.getItem("hierWordtHetOnderwerpInOpgeslagen");
var kijkenOfDeLocalStorageLeeg2 = localStorage.getItem("hierWordtDeCampusInOpgeslagen");
var kijkenOfDeLocalStorageLeeg3 =  localStorage.getItem("hierWordtHetGebouwInOpgeslagen");
var kijkenOfDeLocalStorageLeeg4 =  localStorage.getItem("hierWordtHetLokaalInOpgeslagen");
var kijkenOfDeLocalStorageLeeg5 =  localStorage.getItem("hierWordtDeBeschrijvingInOpgeslagen");


if (!kijkenOfDeLocalStorageLeeg && !kijkenOfDeLocalStorageLeeg2 && !kijkenOfDeLocalStorageLeeg3 && !kijkenOfDeLocalStorageLeeg4 && !kijkenOfDeLocalStorageLeeg5) {
  console.log("Er is niets in de localStorage opgeslagen, dus er komt geen nieuwe klacht bij!");
  window.location = "klachten.html";
}else {
  console.log("Verder funcities gaan uitgevoerd worden");
  vulBeschrijving();
}


function vulBeschrijving(){

 document.getElementById("hierKomtHetOnderwerp").innerHTML = '<h1>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '</h1>';
  
 document.getElementById("hierKomtHetGebouw").innerHTML = '<h2>' + localStorage.getItem('hierWordtHetGebouwInOpgeslagen') +"."+ localStorage.getItem('hierWordtHetLokaalInOpgeslagen') +" - Campus "+localStorage.getItem('hierWordtDeCampusInOpgeslagen') + '</h2>';  
  
 document.getElementById("hierKomtDeDatum").innerHTML = '<h3>' + + dt.getDate() + "/0" + (dt.getMonth() + 1) + "/" + dt.getFullYear()  + '</h3>';  
  
 document.getElementById("hierKomtDeBeschrijving").innerHTML = '<p>' +localStorage.getItem("hierWordtDeBeschrijvingInOpgeslagen")+'</p>';  
 
 
  
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



