var dt = new Date();
test();
function test(){

  document.getElementById("mijnklachtenlijst").innerHTML = '<li><span>' + dt.getDate() + "/0" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + '</span>' + localStorage.getItem('hierWordtHetOnderwerpInOpgeslagen') + '<span>'+localStorage.getItem("hierWordtHetGebouwInOpgeslagen")+"."+localStorage.getItem("hierWordtHetLokaalInOpgeslagen")+'</span><img src="../img/Information.svg" alt=""><img src="../img/roodbol.svg" alt=""></li>';
  
  
}