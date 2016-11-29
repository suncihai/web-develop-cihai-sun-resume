(function(){
   'use strict';

    angular.module('cihaisunApp').controller('AppsController', AppsController);
    
    AppsController.$inject = ['$scope'];

    function AppsController($scope){
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

          //iphone apps
          var appOn=1;
          newsApp_icon.style.transition="ease 1s";
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
})()