$("#sidebar-toggle").click(function(e) {
  console.log(`nav burger pressed`)
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});