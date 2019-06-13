
function pageChange(filename) {
  $("body").scrollTop(0);
  $("#maincontent").load(filename);
}

$(document).ready(function()
{

  $(window).bind('hashchange',function(event){
    var hash = location.hash.replace('#','');
    if (hash === "aboutada") {
      pageChange("aboutada.html")
    } else if (hash === "testimonials") {
      pageChange("testimonials.html");
    } else {
      pageChange("aboutada.html")
    }
  });


//
//   //
//   // Handlers for the various menu
//   // options; when clicked, what they do.
//
//   $("a#aboutada").click(function() {
//       pageChange("/aboutada.html");
//   });
//
//   $("a#testimonials").click(function() {
//     pageChange("/testimonials.html");
//   });
//
//   $("a#services").click(function() {
//     pageChange("/services.html");
//   });
//
//   $("a#workshops").click(function() {
//     pageChange("/workshops.html");
//   });
//
//   $("a#blog").click(function() {
//     window.open("http://naturallisteninglisteningwithlove.blogspot.com/");
//   });
//
//   //
//   // DROPDOWN
//   // Handlers for the various drop-down
//   // menu options and what they do.
//
//   $("a#nl").click(function() {
//       pageChange("/nl.html");
//   });
//
//   $("a#butterfly").click(function() {
//     pageChange("/like-a-butterfly.html");
//   });
//
//   $("a#book-list").click(function() {
//     pageChange("/book-list.html");
//   });
//
//   $("a#making-connections").click(function() {
//     $('#maincontent').load("/making-connections.html");
//     $("body").scrollTop(0);
//   })
//
//   $("a#links").click(function() {
//     pageChange("/links.html");
//   });

});
