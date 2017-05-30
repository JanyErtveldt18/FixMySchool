var dt = new Date();
var kijkenOfDeLocalStorageLeeg = localStorage.getItem("hierWordtHetOnderwerpInOpgeslagen");

if (!kijkenOfDeLocalStorageLeeg) {
  console.log("Er is niets in de localStorage opgeslagen, dus er komt geen nieuwe klacht bij!");
} else {
  
}

 document.getElementById("hierKomtHetOnderwerp").innerHTML = '<h1>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '</h1>';