var ball=document.getElementsByClassName("top")[0]
var meydanca=document.getElementsByClassName("div")[0]
var y=0
var x=0
function up(){

    meydanca.style.borderBottomColor="black"
if(y<=-400){
meydanca.style.borderTopColor="red"
}
else {
    y-=50
}
ball.style.marginTop = y+"px"
}




function right (){
 
 ball.style.marginLeft = x+"px"

 meydanca.style.borderLeftColor="black"

 if(x==900){
    meydanca.style.borderRightColor="red"
    
    }
    else {
         x+=50
    }
 }





 function left (){
    
    meydanca.style.borderRightColor="black"
 
 ball.style.marginLeft = x+"px"
 if(x<=-900){
    meydanca.style.borderLeftColor="red"
   
    
    }
    else {
       x-=50 
    }
 }






  function down (){
  
  ball.style.marginTop= y+"px"
  meydanca.style.borderTopColor="black"
  if(y>=+400){
    meydanca.style.borderBottomColor="red"
    }
    else {y+=50
    }
 }





 function format (){
    y=0
    x=0
    meydanca.style.borderColor="black"
    ball.style.marginLeft= x+"px"
    ball.style.marginTop= y+"px"

   }


   
   function sagyuxari (){
  
      up()
      right()
    
      }
      function sagasagi (){
  
         right()
         down()
       
         }
         function solyuxari (){
  
            up()
         left()
          
            }
            function solasagi (){
  
               left()
               down()
             
               }