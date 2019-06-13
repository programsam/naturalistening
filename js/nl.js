
function pageChange(filename) {
  $("body").scrollTop(0);
  $("#maincontent").load(filename);
}

function syncToHash() {
  var hash = location.hash.replace('#','');
  if (hash === "aboutada") {
    pageChange("aboutada.html")
  } else if (hash === "testimonials") {
    pageChange("testimonials.html");
  } else if (hash === "services") {
    pageChange("services.html");
  } else if (hash === "workshops") {
    pageChange("workshops.html");
  } else if (hash === "nl") {
    pageChange("nl.html");
  } else if (hash === "butterfly") {
    pageChange("like-a-butterfly.html");
  } else if (hash === "book-links") {
    pageChange("book-links.html");
  } else if (hash === "making-connections") {
    pageChange("making-connections.html");
  } else if (hash === "links") {
    pageChange("links.html");
  } else {
    pageChange("aboutada.html")
  }
}

$(document).ready(function()
{
  syncToHash();

  $(window).bind('hashchange',function(event){
    syncToHash();
  });

});
