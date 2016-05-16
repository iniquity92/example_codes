 
$(function(){
     $("#Hslider").slider({
          orientation : "vertical",
          range:"min",
          min:185,
          max:500,
          value:185,
          slide: function(event, ui){
              $("#height").val( ui.value );
          }             
          });
          $("#height").val($("#Hslider").slider("value"));
     $("#Wslider").slider({
         range:"min",
         min:193,
         max:500,
         value:193,
         slide: function(event,ui){
             $("#width").val(ui.value);
             resize(ui.value);
         }
     });
     $("#width").val($("#Wslider").slider("value"));
     
     $("#result").on("newImage",function(e){
         $("#spartancopy").resizable({
             containment:"parent",
             minHeight:185,
             minWidth:193
         });
     });
     
     function resize(newHeight){
         $("#spartancopy").resizable({
             resize:function(event,ui){
                 ui.size.height = newHeight;
             }
         })
     }
});