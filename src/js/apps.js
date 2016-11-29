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
        var newsApp_icon=document.getElementById('newsApp_icon');
        var minionsApp=document.getElementById('minionsApp');
        var minionsApp_icon=document.getElementById('minionsApp_icon');
        var doraemongameApp=document.getElementById('doraemongameApp');
        var doraemongameApp_icon=document.getElementById('doraemongameApp_icon');
        var closeApp=true;
        var appOn=0;

        newsApp_icon.style.transition="ease 1s";
        mobile.style.transition="ease 1s";
        container.style.transition="ease 1s";
        minionsApp.style.transition="ease 1s";
        doraemongameApp.style.transition="ease 1s";
        doraemongameApp_icon.style.transition="ease 1s";

        $('#minionsApp_icon').hover(function(){$('#minionsApp_coming').css("display","block")},function(){$('#minionsApp_coming').css("display","none")});
        
        homebtn.onclick=function(){
            closeApp=true;
            switch(appOn){
              case 1:
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
                newsApp_icon.style.display="block";
                minionsApp_icon.style.display="block";
                doraemongameApp_icon.style.display="block";
            },100);

            appOn=0;
        }

    	  doraemongameApp_icon.onclick=function(){
           appOn=2;
           if(closeApp){
              newsApp_icon.style.display="none";
              minionsApp_icon.style.display="none";
              doraemongameApp_icon.style.display="none";
              if(window.innerWidth<1000){
                  doraemongameApp.style.width="128px";
                  doraemongameApp.style.height="229px";
                  doraemongameApp.style.left="-50px";
                  doraemongameApp.style.top="-53px";
                  doraemongameApp.innerHTML='<object type="text/html" width="229px" height="128px" data="http://suncihai.x10host.com/doraemon_game_mobile/doraemon_game_mobile.html"></object>';
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
    }
})()