window.onload=function(){
  $("#diarybook").click(function(event){
  	 $("#homebody").hide();
     $("#diarypage").fadeIn();
  });

  $("#backtohomebtn1").click(function(){
     $("#diarypage").hide();
     $("#homebody").fadeIn();
  });

  $("#entersecretary").click(function(){
      if($("#password").prop("value")=="aibaobao"){
      	$("#passwordmodal").modal("hide");
     	$("#homebody").hide();
        $("#lockpage").fadeIn();
     }
  });

  $("#backtohomebtn2").click(function(){
     $("#lockpage").hide();
     $("#homebody").fadeIn();
  });

  $(".memos").click(function(){
    $("#memo_exp").fadeIn();
  });

  $("#memo_exp").click(function(){
    $(this).fadeOut();
  });

  $(".makeups").click(function(){
    $("#makeup_exp").fadeIn();
  });

  $("#makeup_exp").click(function(){
    $(this).fadeOut();
  });
}