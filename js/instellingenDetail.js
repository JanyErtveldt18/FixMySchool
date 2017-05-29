function taalHerkennen() {
    var taal = document.getElementById("mySelect").value;
  console.log(taal);
  
  if(taal == "Nederlands"){
    console.log("De taal is Nederlands");
     $(".taal").text("Taal:");
     $(".privacy").text("Privacybeleid:");
     $(".logUit").text("Log uit");
    
  }
  
  if(taal == "Frans"){
    console.log("De taal is Frans");
    $(".taal").text("Langue:");
     $(".privacy").text("Politique de confidentialité:");
     $(".logUit").text("Vous déconnecter");
  }
  if(taal == "Engels"){
    console.log("De taal is Engels");
    $(".taal").text("Language:");
     $(".privacy").text("Privacy policy:");
     $(".logUit").text("Log out");
  }
}

  