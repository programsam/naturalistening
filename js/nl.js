$(document).ready(function()
{
  $('#maincontent').load('/aboutada.html');
  $("body").scrollTop(0);

  //
  // Handlers for the various menu
  // options; when clicked, what they do.

  $("a#aboutada").click(function() {
      $('#maincontent').load("/aboutada.html");
      $("body").scrollTop(0);
  });

  $("a#testimonials").click(function() {
    $('#maincontent').load("/testimonials.html");
    $("body").scrollTop(0);
  });

  $("a#services").click(function() {
    $('#maincontent').load("/services.html");
    $("body").scrollTop(0);
  });

  $("a#workshops").click(function() {
    $('#maincontent').load("/workshops.html");
    $("body").scrollTop(0);
  });

  $("a#blog").click(function() {
    window.open("http://naturallisteninglisteningwithlove.blogspot.com/");
  });

  //
  // DROPDOWN
  // Handlers for the various drop-down
  // menu options and what they do.

  $("a#nl").click(function() {
      $('#maincontent').load("/nl.html");
      $("body").scrollTop(0);
  });

  $("a#butterfly").click(function() {
    $('#maincontent').load("/like-a-butterfly.html");
    $("body").scrollTop(0);
  });

  $("a#book-list").click(function() {
    $('#maincontent').load("/book-list.html");
    $("body").scrollTop(0);
  });

  $("a#making-connections").click(function() {
    $('#maincontent').load("/making-connections.html");
    $("body").scrollTop(0);
  })

  $("a#links").click(function() {
    $('#maincontent').load("/links.html");
    $("body").scrollTop(0);
  });

});
