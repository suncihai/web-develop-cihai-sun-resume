(function(){
   var desaturate = false;
   desaturator();

   function desaturator(){
   	  if(!desaturate){
   	  	 grayscale($(".resume_header"));
   	  	 desaturate = true;
   	  }else{
         grayscale.reset($(".resume_header"));
         desaturate = false;
   	  }
      setTimeout(desaturator,3100);
   }
})()