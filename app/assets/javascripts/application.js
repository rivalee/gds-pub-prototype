$(function(){
  var morechanges = $("#morechanges");

  morechanges.hide();

  });

  $(".morebutton").on("click", function() {

    $("#morechanges").show();
    $(".morebutton").hide();

    return false;

  });
