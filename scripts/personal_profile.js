window.onload=function(){
  var originArr=[];
	var shuffleArr=[];
  var transformBoard=document.getElementById('transform_board');
  var russiablock=document.getElementById('russiablock');
  var resume=document.getElementById('resumeBody');
  var mobile=document.getElementById('mobile');
  var container=document.getElementsByClassName('container')[0];
  var homebtn=document.getElementById('homebtn');
  var content=document.getElementById('content');
  var news=document.getElementsByClassName('news');
  var inner_container=document.getElementById('inner-container');
  var newsApp=document.getElementById('newsApp');
  var newsApp_icon=document.getElementById('newsApp_icon');
  var minionsApp=document.getElementById('minionsApp');
  var doraemongameApp=document.getElementById('doraemongameApp');
  var doraemongameApp_icon=document.getElementById('doraemongameApp_icon');
  var closeApp=false;
  var PixelChange=false;

  transformBoard.style.transition="ease 3s";
  
  //generate 67 basic pixels
	for(var i=0;i<70;i++){
		var tmpPixel=document.createElement('div');
		tmpPixel.setAttribute('id',"pixel"+(i+1));
		tmpPixel.setAttribute('style',"position:absolute;width:20px;height:20px;background:white;top:'';left:''");
		tmpPixel.style.transition="ease-in 3s";
    originArr.push(tmpPixel);
		shuffleArr.push(tmpPixel);
		transformBoard.appendChild(tmpPixel);
	}
  
  //shuffle pixel array function
	function shufflePixelArr(){
        var shuffleTimes=50+Math.ceil(Math.random()*20);
        var time=0;
        while(time<shuffleTimes){
        	var random1=Math.floor(Math.random()*70);
        	var random2;
        	do{
        		random2=Math.floor(Math.random()*70);
        	}while(random2===random1);
        	swap(shuffleArr,random1,random2);
        	time++;
        }
	}
  
  //swap function
	function swap(arr,a,b){
       var tmp=arr[a];
       arr[a]=arr[b];
       arr[b]=tmp;
	}
  
  //switch between cihai and smile face
  function ChangePixel(){
     shufflePixelArr();
     
     if(PixelChange){
         cihai();
         changePixelSize(false);
     }else{
         ProfileImage();
         changePixelSize(true);
     }
     PixelChange=!PixelChange;
     setTimeout(ChangePixel,4000);
  }

  ChangePixel();
  
  //generate cihai pixel image
  function cihai(){
      var customX=window.innerWidth/4;
      var customY=250;
      
      //print out "C"
     for(var cx=0;cx<3;cx++){
        shuffleArr[cx].style.top=customY+"px";
        shuffleArr[cx].style.left=customX+40-cx*20+"px";
     }

     shuffleArr[3].style.top=customY+20+"px";
     shuffleArr[3].style.left=customX-20+"px";
     
     for(var cy=0;cy<4;cy++){
        shuffleArr[cy+4].style.top=customY+40+cy*20+"px";
        shuffleArr[cy+4].style.left=customX-40+"px";
     }

     shuffleArr[8].style.top=customY+120+"px";
     shuffleArr[8].style.left=customX-20+"px";

     for(var cx=0;cx<3;cx++){
        shuffleArr[cx+9].style.top=customY+140+"px";
        shuffleArr[cx+9].style.left=customX+cx*20+"px";
     }
     
     shuffleArr[67].style.top=customY+"px";
     shuffleArr[67].style.left=customX+60+"px";

     shuffleArr[68].style.top=customY+140+"px";
     shuffleArr[68].style.left=customX+60+"px";

     shuffleArr[69].style.top=customY+70+"px";
     shuffleArr[69].style.left=customX-60+"px";

     //print out first "I"
     for(var iy=0;iy<8;iy++){
        shuffleArr[iy+12].style.top=customY+iy*20+"px";
        shuffleArr[iy+12].style.left=customX+150+"px";
     }

     //print out "H"
    for(var hy=0;hy<8;hy++){
        shuffleArr[hy+20].style.top=customY+hy*20+"px";
        shuffleArr[hy+20].style.left=customX+250+"px";
     }

    for(var hx=0;hx<4;hx++){
        shuffleArr[hx+28].style.top=customY+70+"px";
        shuffleArr[hx+28].style.left=customX+270+hx*20+"px";
     }

    for(var hy=0;hy<8;hy++){
        shuffleArr[hy+32].style.top=customY+hy*20+"px";
        shuffleArr[hy+32].style.left=customX+350+"px";
     }

     //print out "A"
     shuffleArr[40].style.top=customY+"px";
     shuffleArr[40].style.left=customX+500+"px";

     shuffleArr[41].style.top=customY+20+"px";
     shuffleArr[41].style.left=customX+490+"px";

     shuffleArr[42].style.top=customY+20+"px";
     shuffleArr[42].style.left=customX+510+"px";

     shuffleArr[43].style.top=customY+40+"px";
     shuffleArr[43].style.left=customX+480+"px";

     shuffleArr[44].style.top=customY+40+"px";
     shuffleArr[44].style.left=customX+520+"px";

     shuffleArr[45].style.top=customY+60+"px";
     shuffleArr[45].style.left=customX+470+"px";

     shuffleArr[46].style.top=customY+60+"px";
     shuffleArr[46].style.left=customX+530+"px";

     shuffleArr[47].style.top=customY+80+"px";
     shuffleArr[47].style.left=customX+460+"px";

     shuffleArr[48].style.top=customY+80+"px";
     shuffleArr[48].style.left=customX+540+"px";

     for(var ax=0;ax<6;ax++){
        shuffleArr[ax+49].style.top=customY+100+"px";
        shuffleArr[ax+49].style.left=customX+450+ax*20+"px";
     }

     shuffleArr[55].style.top=customY+120+"px";
     shuffleArr[55].style.left=customX+440+"px";

     shuffleArr[56].style.top=customY+120+"px";
     shuffleArr[56].style.left=customX+560+"px";

     shuffleArr[57].style.top=customY+140+"px";
     shuffleArr[57].style.left=customX+430+"px";

     shuffleArr[58].style.top=customY+140+"px";
     shuffleArr[58].style.left=customX+570+"px";

     //print out second "I";
     for(var iy=0;iy<8;iy++){
        shuffleArr[iy+59].style.top=customY+iy*20+"px";
        shuffleArr[iy+59].style.left=customX+650+"px";
     }
  }
  
  //generate ProfileImage image
  function ProfileImage(){
      var customX=window.innerWidth/2.4;
      var customY=70;
      
      for(var x=0;x<originArr.length;x++){
        originArr[x].style.top=customY+Math.floor((x/7))*50+"px";
        originArr[x].style.left=customX+(x%7)*50+"px";
        originArr[x].style.background="url(images/profile_tiles/"+(x+1)+".gif)";
      }
  }

  function changePixelSize(value){
     if(value){
        for(var i=0;i<originArr.length;i++){
          originArr[i].style.transition="ease-in 3s";
          originArr[i].style.width="50px";
          originArr[i].style.height="50px";
        }
     }else{
        for(var i=0;i<shuffleArr.length;i++){
          shuffleArr[i].style.transition="ease-in 3s";
          shuffleArr[i].style.width="20px";
          shuffleArr[i].style.height="20px";
        }
     }
  }
  
  //resume body,create a overlap object
  var overlap=document.createElement('div');
  overlap.className="circle";
  overlap.setAttribute('id',"overlap");
  overlap.style.transition="ease 1s";
  resume.appendChild(overlap);

  //record click event coordinate and move the overlap
  resume.onmouseover=function(e){
     e=e||window.event;
     var scrollY= (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
     var clickX=e.clientX;
     var clickY=e.clientY-transformBoard.clientHeight-russiablock.clientHeight+scrollY;
     var overlapRadius=overlap.clientWidth/2;

     console.log(window.innerWidth);
     console.log(clickX+" "+clickY);

     if(clickX<overlapRadius){
       clickX=overlapRadius;
     }else if(clickX>resume.clientWidth-overlapRadius){
       clickX=resume.clientWidth-overlapRadius;
     }

     if(clickY<overlapRadius){
       clickY=overlapRadius;
     }else if(clickY>resume.clientHeight-overlapRadius){
       clickY=resume.clientHeight-overlapRadius;
     }
     
     overlap.style.top=clickY-overlapRadius+"px";
     overlap.style.left=clickX-overlapRadius+"px";
  }

  //create russiablock
  //create fourtileblock
  function fourtileblock(skill){
      var block1=document.createElement('div');
      
      var block1childArr=[];
      var block1child_PArr=[];

      for(var i=0;i<4;i++){
        var tmp=document.createElement('div');
        var tmp2=document.createElement('p');
        block1childArr.push(tmp);
        block1child_PArr.push(tmp2);
      }

      russiablock.appendChild(block1);

      for(var i=0;i<4;i++){
        block1childArr[i].appendChild(block1child_PArr[i]);
        block1.appendChild(block1childArr[i]);
        block1childArr[i].className="blockpiece";
        block1child_PArr[i].className="textpiece";
      }

      var randomLeft=Math.ceil(Math.random()*500);
      var randomShape=Math.ceil(Math.random()*4);

      //different shape
      switch(randomShape){
        //vertical shape
        case 1:
           block1childArr[0].style.top="0px";
           block1childArr[0].style.left=randomLeft+"px";
           block1childArr[1].style.top="0px";
           block1childArr[1].style.left=randomLeft+40+"px";
           block1childArr[2].style.top="0px";
           block1childArr[2].style.left=randomLeft+80+"px";
           block1childArr[3].style.top="0px";
           block1childArr[3].style.left=randomLeft+120+"px";
           break;
        //L shape
        case 2:
           block1childArr[0].style.top="40px";
           block1childArr[0].style.left=randomLeft+"px";
           block1childArr[1].style.top="0px";
           block1childArr[1].style.left=randomLeft+"px";
           block1childArr[2].style.top="0px";
           block1childArr[2].style.left=randomLeft+40+"px";
           block1childArr[3].style.top="0px";
           block1childArr[3].style.left=randomLeft+80+"px";
           break;
        //z shape
        case 3:
           block1childArr[0].style.top="0px";
           block1childArr[0].style.left=randomLeft+"px";
           block1childArr[1].style.top="0px";
           block1childArr[1].style.left=randomLeft+40+"px";
           block1childArr[2].style.top="40px";
           block1childArr[2].style.left=randomLeft+40+"px";
           block1childArr[3].style.top="40px";
           block1childArr[3].style.left=randomLeft+80+"px";
           break;
        //t shape
        case 4:
           block1childArr[0].style.top="0px";
           block1childArr[0].style.left=randomLeft+40+"px";
           block1childArr[1].style.top="40px";
           block1childArr[1].style.left=randomLeft+"px";
           block1childArr[2].style.top="40px";
           block1childArr[2].style.left=randomLeft+40+"px";
           block1childArr[3].style.top="40px";
           block1childArr[3].style.left=randomLeft+80+"px";
           break;
        default:
          break;
      }

      switch(skill){
        case "HTML":
           block1child_PArr[0].innerText="H";
           block1child_PArr[1].innerText="T";
           block1child_PArr[2].innerText="M";
           block1child_PArr[3].innerText="L";
           break;
        case "AJAX":
           block1child_PArr[0].innerText="A";
           block1child_PArr[1].innerText="J";
           block1child_PArr[2].innerText="A";
           block1child_PArr[3].innerText="X";
           break;
        case "SASS":
           block1child_PArr[0].innerText="S";
           block1child_PArr[1].innerText="A";
           block1child_PArr[2].innerText="S";
           block1child_PArr[3].innerText="S";
           break;
        case "GULP":
           block1child_PArr[0].innerText="G";
           block1child_PArr[1].innerText="U";
           block1child_PArr[2].innerText="L";
           block1child_PArr[3].innerText="P";
           break;
        case "JAVA":
           block1child_PArr[0].innerText="J";
           block1child_PArr[1].innerText="A";
           block1child_PArr[2].innerText="V";
           block1child_PArr[3].innerText="A";
           break;
        default:
           break;
      }
      
      var block1transform=false;
      var block1transform2=0;
      var blockdisappear=0;

      //transformation function
      block1.onclick=function(){
        var tmpX=block1childArr[0].style.left;
        var tmpY=block1childArr[0].style.top;
        
        switch(randomShape){
          //vertical shape transformation
          case 1:
            if(!block1transform){
              for(var i=1;i<4;i++){
                block1childArr[i].style.left=tmpX;
                block1childArr[i].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40*i+"px";
              }
            }else{
              for(var i=1;i<4;i++){
                block1childArr[i].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40*i+"px";
                block1childArr[i].style.top=tmpY;
              }
            }
            block1transform=!block1transform;
            break;
          //L shape transformation
          case 2:
             switch(block1transform2){
                case 0:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[1].style.top=tmpY;
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+80+"px";
                  block1transform2++;
                  break;
                case 1:
                  block1childArr[1].style.left=tmpX;
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-80+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1transform2++;
                  break;
                case 2:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[1].style.top=tmpY;
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-80+"px";
                  block1transform2++;
                  break;
                case 3:
                  block1childArr[1].style.left=tmpX;
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+80+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1transform2=0;
                  break;
                default:
                  break;
             }
             break;
          //z shape
          case 3:
             if(!block1transform){
                block1childArr[1].style.left=tmpX;
                block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+80+"px";
              }else{
                block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                block1childArr[1].style.top=tmpY;
                block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+80+"px";
                block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
              }
              block1transform=!block1transform;
             break;
          //t shape
          case 4:
             switch(block1transform2){
                case 0:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[2].style.top=tmpY;
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1transform2++;
                  break;
                case 1:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[2].style.left=tmpX;
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1transform2++;
                  break;
                case 2:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))-40+"px";
                  block1childArr[2].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[2].style.top=tmpY;
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1transform2++;
                  break;
                case 3:
                  block1childArr[1].style.left=parseInt(tmpX.substring(0,tmpX.length-2))-40+"px";
                  block1childArr[1].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1childArr[2].style.left=tmpX;
                  block1childArr[2].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1childArr[3].style.left=parseInt(tmpX.substring(0,tmpX.length-2))+40+"px";
                  block1childArr[3].style.top=parseInt(tmpY.substring(0,tmpY.length-2))+40+"px";
                  block1transform2=0;
                  break;
                default:
                  break;
             }
             break;
          default:
             break;
        }
      }

      function blockfall(){
        var tmp;
        var childArr=block1childArr;
        for(var i=0;i<4;i++){
          var tmp=childArr[i].style.top;
          if(parseInt(tmp.substring(0,tmp.length-2))==960){
            childArr[i].style.display="none";
            blockdisappear++;
          }
          childArr[i].style.top=parseInt(tmp.substring(0,tmp.length-2))+40+"px";
        }
        
        if(blockdisappear==4){
          russiablock.removeChild(block1);
          blockdisappear=0;
        }
        setTimeout(blockfall,1000);
      }

      blockfall();
  }

  function othertileblock(skill,length){
      var block=document.createElement('div');
      
      var blockchildArr=[];
      var blockchild_PArr=[];

      for(var i=0;i<length;i++){
        var tmp=document.createElement('div');
        var tmp2=document.createElement('p');
        blockchildArr.push(tmp);
        blockchild_PArr.push(tmp2);
      }
      
      russiablock.appendChild(block);

      for(var i=0;i<length;i++){
        blockchildArr[i].appendChild(blockchild_PArr[i]);
        block.appendChild(blockchildArr[i]);
        blockchildArr[i].className="blockpiece";
        blockchild_PArr[i].className="textpiece";
      }

      var randomLeft=Math.ceil(Math.random()*500);
      var blockdisappear=0;

      if(length%3==0){
        for(var i=0;i<length;i++){
          blockchildArr[i].style.left=randomLeft+i%3*40+"px";
          blockchildArr[i].style.top=Math.floor(i/3)*40+"px";
        }
      }else if(length%5==0){
        for(var i=0;i<length;i++){
          blockchildArr[i].style.left=randomLeft+i%5*40+"px";
          blockchildArr[i].style.top=Math.floor(i/5)*40+"px";
        }
      }else{
        for(var i=0;i<length;i++){
          blockchildArr[i].style.left=randomLeft+i*40+"px";
          blockchildArr[i].style.top="0px";
        }
      }
      
      switch(skill){
        case "CSS":
           blockchild_PArr[0].innerText="C";
           blockchild_PArr[1].innerText="S";
           blockchild_PArr[2].innerText="S";
           break;
        case "REACTJS":
           blockchild_PArr[0].innerText="R";
           blockchild_PArr[1].innerText="E";
           blockchild_PArr[2].innerText="A";
           blockchild_PArr[3].innerText="C";
           blockchild_PArr[4].innerText="T";
           blockchild_PArr[5].innerText="J";
           blockchild_PArr[6].innerText="S";
           break;
        case "JQUERY":
           blockchild_PArr[0].innerText="J";
           blockchild_PArr[1].innerText="Q";
           blockchild_PArr[2].innerText="U";
           blockchild_PArr[3].innerText="E";
           blockchild_PArr[4].innerText="R";
           blockchild_PArr[5].innerText="Y";
           break;
        case "NODEJS":
           blockchild_PArr[0].innerText="N";
           blockchild_PArr[1].innerText="O";
           blockchild_PArr[2].innerText="D";
           blockchild_PArr[3].innerText="E";
           blockchild_PArr[4].innerText="J";
           blockchild_PArr[5].innerText="S";
           break;
        case "ANGULARJS":
           blockchild_PArr[0].innerText="A";
           blockchild_PArr[1].innerText="N";
           blockchild_PArr[2].innerText="G";
           blockchild_PArr[3].innerText="U";
           blockchild_PArr[4].innerText="L";
           blockchild_PArr[5].innerText="A";
           blockchild_PArr[6].innerText="R";
           blockchild_PArr[7].innerText="J";
           blockchild_PArr[8].innerText="S";
           break;
        case "PHOTOSHOP":
           blockchild_PArr[0].innerText="P";
           blockchild_PArr[1].innerText="H";
           blockchild_PArr[2].innerText="O";
           blockchild_PArr[3].innerText="T";
           blockchild_PArr[4].innerText="O";
           blockchild_PArr[5].innerText="S";
           blockchild_PArr[6].innerText="H";
           blockchild_PArr[7].innerText="O";
           blockchild_PArr[8].innerText="P";
           break;
        case "BOOTSTRAP":
           blockchild_PArr[0].innerText="B";
           blockchild_PArr[1].innerText="O";
           blockchild_PArr[2].innerText="O";
           blockchild_PArr[3].innerText="T";
           blockchild_PArr[4].innerText="S";
           blockchild_PArr[5].innerText="T";
           blockchild_PArr[6].innerText="R";
           blockchild_PArr[7].innerText="A";
           blockchild_PArr[8].innerText="P";
           break;
        case "JAVASCRIPT":
           blockchild_PArr[0].innerText="J";
           blockchild_PArr[1].innerText="A";
           blockchild_PArr[2].innerText="V";
           blockchild_PArr[3].innerText="A";
           blockchild_PArr[4].innerText="S";
           blockchild_PArr[5].innerText="C";
           blockchild_PArr[6].innerText="R";
           blockchild_PArr[7].innerText="I";
           blockchild_PArr[8].innerText="P";
           blockchild_PArr[9].innerText="T";
           break;
        case "OBJECTIVEC":
           blockchild_PArr[0].innerText="O";
           blockchild_PArr[1].innerText="B";
           blockchild_PArr[2].innerText="J";
           blockchild_PArr[3].innerText="E";
           blockchild_PArr[4].innerText="C";
           blockchild_PArr[5].innerText="T";
           blockchild_PArr[6].innerText="I";
           blockchild_PArr[7].innerText="V";
           blockchild_PArr[8].innerText="E";
           blockchild_PArr[9].innerText="C";
           break;
        default:
           break;
      }
      
      function blockfall(){
        var tmp;
        var childArr=blockchildArr;
        for(var i=0;i<length;i++){
          var tmp=childArr[i].style.top;
          if(parseInt(tmp.substring(0,tmp.length-2))==960){
            childArr[i].style.display="none";
            blockdisappear++;
          }
          childArr[i].style.top=parseInt(tmp.substring(0,tmp.length-2))+40+"px";
        }
        
        if(blockdisappear==length){
          russiablock.removeChild(block);
          blockdisappear=0;
        }
        setTimeout(blockfall,1000);
      }
      blockfall();
  }
  
  var SkillArr=["ANGULARJS","REACTJS","BOOTSTRAP","NODEJS","JAVASCRIPT","AJAX","JQUERY","HTML","OBJECTIVEC","CSS","JAVA","GULP","SASS"];
  var round=0;

  function RandomBlock(){
    if(SkillArr[round].length==4){
       fourtileblock(SkillArr[round]);
    }else{
       othertileblock(SkillArr[round],SkillArr[round].length);
    }
    round++;
    if(round==11){
       round=0;
    }
    setTimeout(RandomBlock,5000);
  }

  RandomBlock();

  //iphone apps
  var appOn=1;
  newsApp_icon.style.transition="ease 1s";
  resumeBody.style.transition="ease 1s";
  mobile.style.transition="ease 1s";
  container.style.transition="ease 1s";
  news[0].style.transition="ease 1s";
  news[1].style.transition="ease 1s";
  news[2].style.transition="ease 1s";
  minionsApp.style.transition="ease 1s";
  doraemongameApp.style.transition="ease 1s";
  doraemongameApp_icon.style.transition="ease 1s";

  $('#minionsApp').hover(function(){$('#minionsApp_icon').css("display","block")},function(){$('#minionsApp_icon').css("display","none")});

  homebtn.onclick=function(){
    closeApp=true;
    minionsApp.style.transition="ease 1s";
    doraemongameApp.style.transition="ease 1s";
    doraemongameApp_icon.style.transition="ease 1s";
    $('#newsApp_icon').hover(function(){$(this).css("cursor","pointer")});
    switch(appOn){
      case 1:
         for(var i=0;i<news.length;i++){
            news[i].style.width="0px";
            news[i].style.height="0px";
            news[i].style.background="";
            news[i].innerText="";
          }
          break;
      case 2:
          doraemongameApp.style.width="0px";
          doraemongameApp.style.height="0px";
          doraemongameApp.style.background="";
          doraemongameApp.innerHTML="";
          container.style.transform="rotate(0deg)";
          doraemongameApp.style.transform="rotate(0deg)";
          break;
      default:
          break;
    }

    inner_container.style.overflow="hidden";
      setTimeout(function(){
        newsApp_icon.style.width="70px";
        newsApp_icon.style.height="70px";
        newsApp_icon.style.marginLeft="10px";
        newsApp_icon.style.marginTop="20px";
        newsApp_icon.style.background="url(images/news_icon.png)"
        minionsApp.style.width="70px";
        minionsApp.style.height="70px";
        minionsApp.style.left="90px";
        minionsApp.style.top="0px";
        minionsApp.style.background="url(images/minions_icon.png)";
        doraemongameApp_icon.style.width="70px";
        doraemongameApp_icon.style.height="70px";
        doraemongameApp_icon.style.left="170px";
        doraemongameApp_icon.style.top="0px";
        doraemongameApp_icon.style.background="url(images/doraemongame_icon.png)";
    },100);

    appOn=0;
  }

  newsApp_icon.onclick=function(){
    appOn=1;
    if(closeApp){
      minionsApp.style.transition="0s";
      doraemongameApp_icon.style.transition="0s";
      $('#newsApp_icon').hover(function(){$(this).css("cursor","default")});
      setTimeout(function(){
        newsApp_icon.style.width="";
        newsApp_icon.style.height="";
        newsApp_icon.style.marginLeft="";
        newsApp_icon.style.marginTop="";
        newsApp_icon.style.background="";
        news[0].innerText="Movie";
        news[0].style.width="320px";
        news[0].style.height="200px";
        news[0].style.marginLeft="0px";
        news[0].style.marginTop="0px";
        news[0].style.background="url(images/movie.gif)";
        news[1].innerText="Politics";
        news[1].style.width="320px";
        news[1].style.height="200px";
        news[1].style.marginLeft="0px";
        news[1].style.marginTop="0px";
        news[1].style.background="url(http://i2.cdn.turner.com/cnnnext/dam/assets/160712193345-01-pence-trump-split-overlay-tease.jpg)";
        news[2].innerText="Shopping";
        news[2].style.width="320px";
        news[2].style.height="200px";
        news[2].style.marginLeft="0px";
        news[2].style.marginTop="0px";
        news[2].style.background="url(images/shopping.gif)";
        minionsApp.style.width="0px";
        minionsApp.style.height="0px";
        doraemongameApp_icon.style.width="0px";
        doraemongameApp_icon.style.height="0px";
        inner_container.style.overflowY="scroll";
      },100);

      setTimeout(function(){
          for(var i=3;i<news.length;i++){
            news[i].style.width="320px";
            news[i].style.height="200px";
          }
          news[3].innerText="Stars";
          news[4].innerText="Sports";
          news[5].innerText="Travel";
          news[6].innerText="Entertainment";
          news[7].innerText="Financial";
      },1100);
      
      closeApp=false;
    }
  }

  doraemongameApp_icon.onclick=function(){
    appOn=2;
    if(closeApp){
      doraemongameApp_icon.style.width="";
      doraemongameApp_icon.style.height="";
      doraemongameApp_icon.style.marginLeft="";
      doraemongameApp_icon.style.marginTop="";
      doraemongameApp_icon.style.background="";
      doraemongameApp.style.width="320px";
      doraemongameApp.style.height="567px";
      doraemongameApp.style.left="-124px";
      doraemongameApp.style.top="-143px";
      doraemongameApp.innerHTML='<object type="text/html" width="567px" height="320px" data="http://suncihai.x10host.com/doraemon_game_mobile/doraemon_game_mobile.html"></object>';
      container.style.transform="rotate(-90deg)";
      doraemongameApp.style.transform="rotate(90deg)";
    }
    closeApp=false;
  }
}