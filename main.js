window.onload = function(){
    
    
var button = document.getElementById("daButton");


button.onclick = function(){
   document.getElementById("daBody").style.color = getColor();
};

function getColor(){
    var num = Math.floor(Math.random() * 5); 
    console.log(num);
    if(num == 1){
        return "7B3E19";    
    }
    else if( num == 2){
        return "blue";    
    }
    else if( num == 3){
        return "black";    
    }
    else{
     return "grey";   
    }
}
    var n = 1;
    while(n == 1){
        setTimeout(changePhoto1(), 1000);
        setTimeout(changePhoto2(), 1000);
        setTimeout(changePhoto3(), 1000);
        setTimeout(changePhoto4(), 1000);
    }

};

function changePhoto1(){
   var image = document.getElementById("FlexForTheGram");
   if(image.src = "https://sites.google.com/a/srvusd.net/dvhs-track-team/_/rsrc/1353285609372/config/customLogo.gif?revision=2"){
      image.src = "https://scontent.cdninstagram.com/t51.2885-19/s150x150/13381005_649182348570877_1733373082_a.jpg";
   }
}

function changePhoto2(){
    var image = document.getElementById("FlexForTheGram");
    if(image.src = "http://thumbs3.ebaystatic.com/d/l225/m/mkEQtvXSVDzzXPSfoG2Ow4Q.jpg"){
        image.src = "https://i.ytimg.com/vi/4NJlUribp3c/maxresdefault.jpg";
    }
}    
     
function changePhoto3(){
    var image = document.getElementById("FlexForTheGram");
    if(image.src = "https://i.ytimg.com/vi/4NJlUribp3c/maxresdefault.jpg"){
        image.src = image.src = "http://www.musicalinstrumenthaven.com/ProductImages/blessing_trumpets/intermediate-trumpet/xl-tr/silver-plated-trumpet/Blessing_Silver_Trumpet_l.jpg";
    }
}    
function changePhoto4(){
    var image = document.getElementById("FlexForTheGram");
    if(image.src = image.src = "http://www.musicalinstrumenthaven.com/ProductImages/blessing_trumpets/intermediate-trumpet/xl-tr/silver-plated-trumpet/Blessing_Silver_Trumpet_l.jpg"){
       image.src = "https://sites.google.com/a/srvusd.net/dvhs-track-team/_/rsrc/1353285609372/config/customLogo.gif?revision=2";
    }
}        