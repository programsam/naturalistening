$(document).ready(function()
{
  $('#content').load('/aboutada.html');
  $("body").scrollTop(0);

  //
  // Handlers for the various menu
  // options; when clicked, what they do.

  $("a#aboutada").click(function() {
      $('#content').load("/aboutada.html");
      $("body").scrollTop(0);
  });

  $("a#testimonials").click(function() {
    $('#content').load("/testimonials.html");
    $("body").scrollTop(0);
  });

  $("a#services").click(function() {
    $('#content').load("/services.html");
    $("body").scrollTop(0);
  });

  $("a#workshops").click(function() {
    $('#content').load("/workshops.html");
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
      $('#content').load("/nl.html");
      $("body").scrollTop(0);
  });

  $("a#butterfly").click(function() {
    $('#content').load("/like-a-butterfly.html");
    $("body").scrollTop(0);
  });

  $("a#book-list").click(function() {
    $('#content').load("/book-list.html");
    $("body").scrollTop(0);
  });

  $("a#making-connections").click(function() {
    $('#content').load("/making-connections.html");
    $("body").scrollTop(0);
  })

  $("a#links").click(function() {
    $('#content').load("/links.html");
    $("body").scrollTop(0);
  });

});
