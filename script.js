var click = document.getElementByClassName("nav-menu");
var currenPosition = 0;
var targetPosition = 0;




var scrollInterval = 
   navmenu.addEventListener(click,function(){
       var value = this.getAttribute("value")
       
       if(value=="home")
           targetPosition = 50;
       else if(value=="about")
           targetPositon = 100;
        else if(value=="skills")
           targetPositon = 100
        else if(value=="experience")
           targetPositon = 100;
        else if(value=="education")
           targetPositon = 100;
        else if(value=="portfolio")
           targetPositon = 100;
        else if(value=="contact")
           targetPositon = 100;
       
       if(currentPosition>=targetPosition){
            clearInterval(scrollInterval);
            return;
        }
       
        window.scrollBy(0,targetPosition);
       
       
   })