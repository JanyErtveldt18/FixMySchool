
function dropDown(){
   document.getElementById("dropContent").classList.toggle("show");
}
window.onclick = function(event) {
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