(function(){
   'use strict';

    angular.module('cihaisunApp').controller('AppsController', AppsController);
    
    AppsController.$inject = ['$scope'];

    function AppsController($scope){
        var mobile=document.getElementById('mobile');
        var container=document.getElementById('iphone_body');
        var homebtn=document.getElementById('homebtn');
        var content=document.getElementById('content');
        var inner_container=document.getElementById('inner-container');
        var newsApp=document.getElementById('newsApp');
        var minionsApp=document.getElementById('minionsApp');
        var minionsApp_icon=document.getElementById('minionsApp_icon');
        var doraemongameApp=document.getElementById('doraemongameApp');
        var doraemongameApp_icon=document.getElementById('doraemongameApp_icon');
        var blackjackApp=document.getElementById('blackjackApp');
        var blackjackApp_icon=document.getElementById('blackjackApp_icon');
        var closeApp=true;
        var appOn=0;
        
        newsApp.style.transition="ease 1s";
        mobile.style.transition="ease 1s";
        container.style.transition="ease 1s";
        minionsApp.style.transition="ease 1s";
        doraemongameApp.style.transition="ease 1s";
        doraemongameApp_icon.style.transition="ease 1s";
        blackjackApp.style.transition="ease 1s";
        blackjackApp_icon.style.transition="ease 1s";

        $('#minionsApp_icon').hover(function(){$('#minionsApp_coming').css("display","block")},function(){$('#minionsApp_coming').css("display","none")});
        
        homebtn.onclick=function(){
            closeApp=true;
            newsApp.style.display="block";
            switch(appOn){
              case 1:
                  newsApp.innerHTML="";
                  break;
              case 2:
                  doraemongameApp.style.width="0px";
                  doraemongameApp.style.height="0px";
                  doraemongameApp.style.background="";
                  doraemongameApp.innerHTML="";
                  container.style.transform="rotate(0deg)";
                  doraemongameApp.style.transform="rotate(0deg)";
                  break;
              case 3:
                  blackjackApp.style.width="0px";
                  blackjackApp.style.height="0px";
                  blackjackApp.style.background="";
                  blackjackApp.innerHTML="";
                  container.style.transform="rotate(0deg)";
                  blackjackApp.style.transform="rotate(0deg)";
                  break;
              default:
                  break;
            }
            
            inner_container.style.overflow="hidden";
            setTimeout(function(){
                if(window.innerWidth<1000){
                   newsApp.style.width="28px";
                   newsApp.style.height="28px";
                   newsApp.style.left="3px";
                   newsApp.style.top="7px";
                   newsApp.style.background="url(../images/news_icon.png)";
                   newsApp.style.backgroundSize="cover";
                }else{
                   newsApp.style.width="70px";
                   newsApp.style.height="70px";
                   newsApp.style.left="10px";
                   newsApp.style.top="20px";
                   newsApp.style.background="url(../images/news_icon.png)";
                   newsApp.style.backgroundSize="cover";
                }
                minionsApp_icon.style.display="block";
                doraemongameApp_icon.style.display="block";
                blackjackApp_icon.style.display="block";
            },100);

            appOn=0;
        }
        
        newsApp.onclick=function(){
           appOn=1;
           if(closeApp){
              minionsApp_icon.style.display="none";
              doraemongameApp_icon.style.display="none";
              blackjackApp_icon.style.display="none";
              if(window.innerWidth<1000){
                  newsApp.style.width="128px";
                  newsApp.style.height="229px";
                  newsApp.style.left="0px";
                  newsApp.style.top="0px";
                  newsApp.style.backgroundSize="cover";
                  newsApp.innerHTML='<object type="text/html" width="128px" height="229px" data="http://www.cnn.com"></object>';
              }else{
                  newsApp.style.width="320px";
                  newsApp.style.height="567px";
                  newsApp.style.left="0px";
                  newsApp.style.top="0px";
                  newsApp.style.backgroundSize="cover";
                  newsApp.innerHTML='<object type="text/html" width="320px" height="567px" data="http://www.cnn.com"></object>';
              }
              inner_container.style.overflowY="scroll";
          }
          closeApp=false;
        }

    	  doraemongameApp_icon.onclick=function(){
           appOn=2;
           if(closeApp){
              newsApp.style.display="none";
              minionsApp_icon.style.display="none";
              doraemongameApp_icon.style.display="none";
              blackjackApp_icon.style.display="none";
              if(window.innerWidth<1000){
                  doraemongameApp.style.width="128px";
                  doraemongameApp.style.height="229px";
                  doraemongameApp.style.left="-50px";
                  doraemongameApp.style.top="-53px";
                  doraemongameApp.innerHTML='<object type="text/html" width="229px" height="128px" data="http://suncihai.x10host.com/doraemon_game_mobile_small/doraemon_game_mobile.html"></object>';
              }else{
                  doraemongameApp.style.width="320px";
                  doraemongameApp.style.height="567px";
                  doraemongameApp.style.left="-124px";
                  doraemongameApp.style.top="-123px";
                  doraemongameApp.innerHTML='<object type="text/html" width="567px" height="320px" data="http://suncihai.x10host.com/doraemon_game_mobile/doraemon_game_mobile.html"></object>';
              }
              container.style.transform="rotate(-90deg)";
              doraemongameApp.style.transform="rotate(90deg)";
          }
          closeApp=false;
        }

        blackjackApp_icon.onclick=function(){
           appOn=3;
           if(closeApp){
              newsApp.style.display="none";
              minionsApp_icon.style.display="none";
              doraemongameApp_icon.style.display="none";
              blackjackApp_icon.style.display="none";
              if(window.innerWidth<1000){
                  blackjackApp.style.width="128px";
                  blackjackApp.style.height="229px";
                  blackjackApp.style.left="-50px";
                  blackjackApp.style.top="-53px";
                  blackjackApp.innerHTML='<object type="text/html" width="229px" height="128px" data="http://suncihai.x10host.com/blackjack_mobile_small/blackjack_mobile.html"></object>';
              }else{
                  blackjackApp.style.width="344px";
                  blackjackApp.style.height="567px";
                  blackjackApp.style.left="-134px";
                  blackjackApp.style.top="-112px";
                  blackjackApp.innerHTML='<object type="text/html" width="567px" height="344px" data="http://suncihai.x10host.com/blackjack_mobile/blackjack_mobile.html"></object>';
              }
              container.style.transform="rotate(-90deg)";
              blackjackApp.style.transform="rotate(90deg)";
          }
          closeApp=false;
        }
    }
})()