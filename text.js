
var value=50
var positionLeft=50
var positionTop=10
var count=0
var speedx=-0.5
var speedy=-0.5
var score=0
var e=0


  	$('#LEFT').click(function(){
	$('#PIN').css('left',(value-3)+'%');
	value=value-3;
});
$('#RIGHT').click(function(){
	$('#PIN').css('left',(value+3)+'%');
	value=value+3;
});
var storeTimeInterval=setInterval(function(){
	
   
   if(positionLeft<=10)
   {
   	speedx=-speedx;
   	$('#Ball').css('background-color','blue');
   }
    if(positionLeft>=90)
   {
   	speedx=-speedx;
   	$('#Ball').css('background-color','green');
   }
   
   	if(positionTop<=0)
   	{
   		speedy=-speedy;
   		$('#Ball').css('background-color','yellow');
   	}
   	if(positionTop==77){ 
        alert("You lose");
        alert("Your score: "+score);
   		clearInterval(storeTimeInterval);
   		
   	   }
    if(positionTop==75&&positionLeft>=value-3&&positionLeft<=value+3){
    	if(positionLeft<=value){
     e=value-positionLeft;
   }
   else{e=positionLeft-value;}
    	speedy=-speedy;
    	speedx=speedx+(e/3)*speedx;
    	$('#Ball').css('background-color','red');
    	score++;
    }
   
   $('#Ball').css('left',(positionLeft+speedx)+'%');
	$('#Ball').css('top',(positionTop+speedy)+'%');
	positionLeft=positionLeft+speedx;
	positionTop=positionTop+speedy;
	

   

    },50);
  
   

   
 





