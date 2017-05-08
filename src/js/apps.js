window.onload=function(){
  var diarybooktimer;
  var lockertimer;
  var diarybookboolean=false;
  var lockerboolean=false;

  $("#diarybook").click(function(event){
  	 $("#locker_enter").fadeOut();
  	 $("#lockerhint").fadeOut();
  	 clearInterval(lockertimer);
  	 lockertimer=null;
     lockerboolean=false;
  	 if(!diarybookboolean){
  	 	event.stopPropagation();
	  	 var $that = $(this);
	  	 if(!diarybooktimer){
	  	 	diarybooktimer = setInterval(function(){
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
	  	 $("#diaryhint").fadeIn();
	  	 $("#diary_enter").fadeIn();
	  	 diarybookboolean=true;
	  	}else{
            clearInterval(diarybooktimer);
  	        diarybooktimer=null;
  	        $("#diary_enter").fadeOut();
  	        $("#diaryhint").fadeOut();
  	        diarybookboolean=false;
	  	}
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

  $("#enterdiarybtn").click(function(){
     $("#homebody").hide();
     $("#diarypage").fadeIn();
  });

  $("#backtohomebtn1").click(function(){
     $("#diarypage").hide();
     $("#homebody").fadeIn();
  });

  $("#enterlockerbtn").click(function(){
     if($("#password").prop("value")=="aibaobao"){
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