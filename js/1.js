$(document).ready(function () {
      var r = 64;
      var consize = 600;
      var gridmaker = function(x){
        var i=0;
        var cells = x*x;
        while(i<cells){
          $('.container').append('<div class="pixel"></div>');
          i++;
        }
        $('.pixel').css({
          "height": consize/r + "px",
          "width": consize/r + "px",
        });
      };

      var paint = function(y){
        $(y).mouseenter(function() {
          $(this).css("background-color","#000000");
        });
      };

      gridmaker(r);
      paint('.pixel');

      var clear = function(){
        $('#but').click(function() {
          $('.pixel').remove();
          gridmaker(r);
          paint('.pixel');
        });
      };

      clear();

      var changeresol = function(){
        $('#but1').click(function() {
          r = prompt('enter no of rows');
          if(r>150||r<5){
            alert('input out of range');
            r = 75;
          }
          $('.pixel').remove();
          gridmaker(r);
          paint('.pixel');
        });
      };

      changeresol();

});
