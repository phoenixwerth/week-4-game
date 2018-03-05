var wins=0;
var losses=0;
var randomResult= ("#targetScore");

randomResult = Math.floor(Math.random() *40)+ 30;
console.log(randomResult);
$("#targetScore").append (randomResult);
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11)+1;
   console.log(random);
   var crystal= $(".diamond").eq(i);
    crystal.attr({
        "data-random": random   
    });
}
   $(".diamond").on("click", function (){
       console.log($(this).attr("data-random"));
  
       $("#yourScore").append (random);
  
    });
   
