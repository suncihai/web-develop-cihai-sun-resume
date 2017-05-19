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

  $("#gotonewestdairy").click(function(){
     window.location='#newest_dairy';
  });

  setInterval(function(){
           var bubblerandomleft=Math.ceil(Math.random()*300);
           var BubbleDiv=document.getElementById('bubble_layer');
           var newDiv2=document.createElement('div');
           var newImg2=document.createElement('img');
           newDiv2.setAttribute("style","position:absolute;left:"+bubblerandomleft+"px;top:850px;width:60px;height:60px");
           newDiv2.setAttribute("class","bubbleflying");
           newImg2.setAttribute("src","images/bubble.png");
           newDiv2.appendChild(newImg2);
           BubbleDiv.appendChild(newDiv2);
           newDiv2.style.transition="ease-in 5s";

           setTimeout(function(){newDiv2.style.top="0px";},200);
           var bubbleburst=false;

           newDiv2.onclick=function(event){
              var currentX=event.clientX;
              var currentY=event.clientY;
              BubbleDiv.removeChild(newDiv2);
              bubbleburst=true;

              var newBubblefeather1=document.createElement('div');
              var newBubblefeather1img=document.createElement('img');
              newBubblefeather1.setAttribute("style","position:absolute;left:"+currentX+"px;top:"+(currentY-130)+"px;width:90px;height:108px");
              newBubblefeather1.setAttribute("class","bubblefeather1");
              newBubblefeather1img.setAttribute("src","images/bubble_feather1.png");
              newBubblefeather1.appendChild(newBubblefeather1img);
              BubbleDiv.appendChild(newBubblefeather1);

              var newBubblefeather2=document.createElement('div');
              var newBubblefeather2img=document.createElement('img');
              newBubblefeather2.setAttribute("style","position:absolute;left:"+(currentX-100)+"px;top:"+(currentY-80)+"px;width:93px;height:81px");
              newBubblefeather2.setAttribute("class","bubblefeather2");
              newBubblefeather2img.setAttribute("src","images/bubble_feather2.png");
              newBubblefeather2.appendChild(newBubblefeather2img);
              BubbleDiv.appendChild(newBubblefeather2);
              
              var newBubbleheart1=document.createElement('div');
              var newBubbleheart1img=document.createElement('img');
              newBubbleheart1.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY-20)+"px;width:24px;height:24px");
              newBubbleheart1.setAttribute("class","bubbleheart1");
              newBubbleheart1img.setAttribute("src","images/bubble_heart1.png");
              newBubbleheart1.appendChild(newBubbleheart1img);
              BubbleDiv.appendChild(newBubbleheart1);

              var newBubbleheart2=document.createElement('div');
              var newBubbleheart2img=document.createElement('img');
              newBubbleheart2.setAttribute("style","position:absolute;left:"+(currentX-50)+"px;top:"+(currentY+20)+"px;width:16px;height:16px");
              newBubbleheart2.setAttribute("class","bubbleheart2");
              newBubbleheart2img.setAttribute("src","images/bubble_heart2.png");
              newBubbleheart2.appendChild(newBubbleheart2img);
              BubbleDiv.appendChild(newBubbleheart2);

              var newBubblestar1=document.createElement('div');
              var newBubblestar1img=document.createElement('img');
              newBubblestar1.setAttribute("style","position:absolute;left:"+(currentX+10)+"px;top:"+(currentY+40)+"px;width:24px;height:24px");
              newBubblestar1.setAttribute("class","bubblestar1");
              newBubblestar1img.setAttribute("src","images/bubble_star1.png");
              newBubblestar1.appendChild(newBubblestar1img);
              BubbleDiv.appendChild(newBubblestar1);

              var newBubblestar2=document.createElement('div');
              var newBubblestar2img=document.createElement('img');
              newBubblestar2.setAttribute("style","position:absolute;left:"+(currentX-30)+"px;top:"+(currentY-10)+"px;width:34px;height:34px");
              newBubblestar2.setAttribute("class","bubblestar1");
              newBubblestar2img.setAttribute("src","images/bubble_star2.png");
              newBubblestar2.appendChild(newBubblestar2img);
              BubbleDiv.appendChild(newBubblestar2);

              var newBubblestar3=document.createElement('div');
              var newBubblestar3img=document.createElement('img');
              newBubblestar3.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY)+"px;width:16px;height:16px");
              newBubblestar3.setAttribute("class","bubblestar1");
              newBubblestar3img.setAttribute("src","images/bubble_star3.png");
              newBubblestar3.appendChild(newBubblestar3img);
              BubbleDiv.appendChild(newBubblestar3);
              
              var falltime=0;
              
              //if onmouseover bubble in the lower part of screen, make it fall faster
              if(currentY<500){
                  falltime=7100;
                  newBubblefeather1.style.transition="ease-in 10s";
                  newBubblefeather2.style.transition="ease-in 9s";
                  newBubbleheart1.style.transition="ease-in 10s";
                  newBubbleheart2.style.transition="ease-in 9s";
                  newBubblestar1.style.transition="ease-in 10s";
                  newBubblestar2.style.transition="ease-in 9.5s";
                  newBubblestar3.style.transition="ease-in 9.5s";
              }else{
                  falltime=3100;
                  newBubblefeather1.style.transition="ease-in 3s";
                  newBubblefeather2.style.transition="ease-in 2s";
                  newBubbleheart1.style.transition="ease-in 3s";
                  newBubbleheart2.style.transition="ease-in 2s";
                  newBubblestar1.style.transition="ease-in 3s";
                  newBubblestar2.style.transition="ease-in 2.5s";
                  newBubblestar3.style.transition="ease-in 2.5s";
              }

              setTimeout(function(){
                newBubblefeather1.style.top="800px";
                newBubblefeather2.style.top="800px";
                newBubbleheart1.style.top="830px";
                newBubbleheart2.style.top="840px";
                newBubblestar1.style.top="820px";
                newBubblestar2.style.top="820px";
                newBubblestar3.style.top="820px";
              },200);
              console.log(newBubblefeather1);

              setTimeout(function(){
                BubbleDiv.removeChild(newBubblefeather1);
                BubbleDiv.removeChild(newBubblefeather2);
                BubbleDiv.removeChild(newBubbleheart1);
                BubbleDiv.removeChild(newBubbleheart2);
                BubbleDiv.removeChild(newBubblestar1);
                BubbleDiv.removeChild(newBubblestar2);
                BubbleDiv.removeChild(newBubblestar3);
              },falltime);
           }
           
           setTimeout(function(){
              if(!bubbleburst){
                 BubbleDiv.removeChild(newDiv2);
              }
           },5200);
    },2000);
}