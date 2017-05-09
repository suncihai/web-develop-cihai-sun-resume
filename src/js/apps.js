window.onload=function(){
  $("#diarybook").click(function(event){
  	 $("#homebody").hide();
     $("#diarypage").fadeIn();
  });

   $("#locker").click(function(event){
   	 $("#diary_enter").fadeOut();
  	 $("#diaryhint").fadeOut();
  	 clearInterval(diarybooktimer);
  	 diarybooktimer=null;
  	 diarybookboolean=false;
   	 if(!lockerboolean){
   	 	event.stopPropagation();
	  	 var $that = $(this);
	  	 if(!lockertimer){
	  	 	lockertimer = setInterval(function(){
		        $that.animate({
			        bottom:"40px"
			  	 },300);
			  	 setTimeout(function(){
			        $that.animate({
				        bottom:"25px"
				  	 },300);
			  	 },300);
		  	 },600);
	  	 }
	  	 $("#lockerhint").fadeIn();
	  	 $("#locker_enter").fadeIn();
	  	 lockerboolean=true;
	  	}else{
           clearInterval(lockertimer);
  	       lockertimer=null;
  	       $("#locker_enter").fadeOut();
  	       $("#lockerhint").fadeOut();
  	       lockerboolean=false;
	  	}
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