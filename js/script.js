$(document).ready(function(){
    $("button").click(function(){
      $("#arcade").fadeIn(3000);
      $("#controller").fadeIn("3000");
    });
  });

  $(document).ready(function(){
    $("#description").click(function(){
      $("#info").slideDown("slow");
    });
  });
  $(document).ready(function(){
    $("button").click(function(){
      $("#switch").animate({left: '250px'});
    });
  });
  $("document").ready(function() {
    getData();
  });
  
  function getData() {
    $.ajax({
      url:"testdata.txt",
      type:"GET",
      datatype:"text",
      success:successFn,
      error:errorFn,
      complete:function(xhr, status){
        console.log("The request is complete");
      }

    })
  }
  
  function successFn(result) {
    console.log("Setting result");
    $("#ajaxContent").append(result);
  }
  
  function errorFn(xhr, status, strErr) {
    console.log("There was an error!");
  }