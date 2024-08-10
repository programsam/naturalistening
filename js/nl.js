
function pageChange(filename) {
  $("#maincontent").load(filename);
  $('.navbar-collapse').addClass('collapse');
  $('.navbar-collapse').removeClass('show');

  //animated scroll to the main content container
  //so the user can read the content they just selected
  $('html,body').animate({scrollTop: $('#maincontent').offset().top}, 'slow');
}

function syncToHash() {
  var hash = location.hash.replace('#','');
  $('.nav-link').removeClass('active');
  $('.dropdown-item').removeClass('active');
  if (hash === "aboutada") {
    $('#aboutada').addClass('active');
    pageChange("aboutada.html")
  } else if (hash === "testimonials") {
    $('#testimonials').addClass('active');
    pageChange("testimonials.html");
  } else if (hash === "services") {
    $('#services').addClass('active');
    pageChange("services.html");
  } else if (hash === "workshops") {
    $('#workshops').addClass('active');
    pageChange("workshops.html");
  } else if (hash === "nl") {
    $('#nl').addClass('active');
    pageChange("nl.html");
  } else if (hash === "butterfly") {
    $('#butterfly').addClass('active');
    pageChange("like-a-butterfly.html");
  } else if (hash === "book-list") {
    $('#book-list').addClass('active');
    pageChange("book-list.html");
  } else if (hash === "links") {
    $('#links').addClass('active');
    pageChange("links.html");
  } else {
    $('#aboutada').addClass('active');
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
