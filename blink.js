// YOUR CODE GOES HERE

$.fn.blink = function( msecs ){
  var that = $(this);
  setInterval(
    function()
      {
        if (that.css("color") == 'rgb(0, 0, 0)') { that.css("color", "#ffffff"); }
        else { that.css("color", "#000000"); }
      }
  , msecs );
}