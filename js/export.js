$(document).ready(function() {

//* Export Charts as Image

  // Global variable 
  var element = []; 
  var getCanvas;
  console.log('Js run');
  $('.chartcheckboxholder input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
      element.push($(this).attr('id'));
      console.log(element);
    }
    else if($(this).prop("checked") == false){
      var removeItem = $(this).attr('id');   
  
      element = $.grep(element, function(value) {
        return value != removeItem;
      });

      console.log(element);
    }
  });

  function drawImg() {
    if(getCanvas) {
      var imgageData = getCanvas.toDataURL("image/png");
      // Now browser starts downloading it instead of just showing it
      var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
      $("#export-as-png").attr("download", "chart.png").attr("href", newData);
    }
  }
  $("#export-as-png").on('click', function () {
    if(element.length > 0 && element.length == 1) {
      console.log('convert to Image');
      var ele = $('.scrollable_container div[data-attr='+ element[0] + ']');
      console.log(ele);
      html2canvas(ele, { 
          onrendered: function(canvas) { 
              // $("#previewImage").append(canvas);
              getCanvas = canvas; 
              console.log(getCanvas);
          } 
      });
      drawImg();
      
    }
  });
  console.log('getcan',getCanvas);
  
//*
  
});