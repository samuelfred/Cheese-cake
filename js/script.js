console.log('hi');


$(document).ready(function(){


$('h1').click(function(){
	 // $('body').css('background','red');
	 $('body').addClass('new');
	$('h1').hide();
});


$( function() {
    $( "#draggableBis, #draggableBut, #draggableSug" ).draggable();
   

    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .attr( 'title','added biscuit, butter, sugar' )
                    
          .addClass('ui-state-highlight')
          .find( "p" )
            .html( "Dropped!" );
         $("#draggableBis, #draggableBut, #draggableSug").css('z-index', 3);
          $("#biscuits, #butter, #sugar").addClass('resizeImg');
      }
       
    });
  });


 $('#pressTin').click(function(){
    $('#tin').attr('src','images/pressbiscuits.jpg');
    $("#biscuits, #butter, #sugar").hide();




 });







$('#fridgeBtn').click(function(){
  console.log('move');




  var tin =document.getElementById("droppable");
  console.log(tin);
  var start=0;
  speed = setInterval(move, 3);
  function move() {
    if (start >=300) {
      stopTin();
    } else {
      //start=start+1;
      start++;
      tin.style.top=start + "px";
      console.log(tin.style.right)

    }
  }
  function stopTin() {
  clearInterval(speed);
  alert("Refrigerated!");
}


});


});