(function(){
   'use strict';

    angular.module('cihaisunApp').controller('ProjectsController', ProjectsController);
    
    ProjectsController.$inject = ['$scope'];

    function ProjectsController($scope){
    	$("#social_media_wall").click(function(){
    		$(this).prevAll(".projects").css("display","none");
    		$(this).nextAll(".projects").css("display","none");
    		$(this).css("transition","ease 1s").css("width","100%");
    		$(this).html('<object type="text/html" width="100%" height="800px" data="http://suncihai.x10host.com/social_media_wall"></object>');
    		$(this).css("opacity","1.0");
            $(this).removeClass('col-sm-offset-1');
    		$(".projects").hover(function(){$(this).css("opacity","1.0");});
    		$("#closebtn").css("display","block");
    	});

    	$("#fashion_women_and_news").click(function(){
    		$(this).prevAll(".projects").css("display","none");
    		$(this).nextAll(".projects").css("display","none");
    		$(this).css("transition","ease 1s").css("width","100%");
    		$(this).html('<object type="text/html" width="100%" height="800px" data="http://suncihai.x10host.com/enhanced_display/enhanced_display.html"></object>');
    		$(this).css("opacity","1.0");
            $(this).removeClass('col-sm-offset-1');
    		$(".projects").hover(function(){$(this).css("opacity","1.0");});
    		$("#closebtn").css("display","block");
    	});

    	$("#closebtn").click(function(){
    		$(this).css("display","none");
    		$(".projects").css("display","block").hover(function(){$(this).css("opacity","0.3");},function(){$(this).css("opacity","1.0");});
    		$(".projects").css("width","");
            $(".projects").addClass('col-sm-offset-1');
    		$("#social_media_wall").html('<img src="images/social_media_wall.jpg"><div class="project_name">Social Media Wall</div>');
    		$("#fashion_women_and_news").html('<img src="images/enhanced_display.jpg"><div class="project_name">Fashion Women and News</div>');
    	});
    }
})()