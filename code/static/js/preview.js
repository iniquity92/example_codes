 $("#toCrop").on('change',function(e){
     // alert("xyz");
     var myfile = this.files[0];
     var types = /(jpe?g|png|svg|tiff|exif|gif)/i;
     var imgSrc="";
     if(!types.test(myfile.type)){
         $("#msg").html(
              "<p>Error uploading file, file format not supported</p>"
           );
     }
     else{
         readFile(this.files[0],function(e){ //this e is resulting as the execution of readAsDataURL() function
             $("#msg").empty();
             /*$("#imageholder").html(
                "<img height='100' width='60' src='"+e.target.result+"'>"
             );*/
             imgSrc = e.target.result;
             makeImage(imgSrc);
         });

    }
});

//reads file from the file object
function readFile(file,callback){
   var reader = new FileReader();
   reader.onload = callback;
   reader.readAsDataURL(file);
}

//makes an image so that we can manipulate the sizes of the holder,overlay etc
function makeImage(src){
  var newImg = new Image();
  var catchHeight = 0;
  var catchWidth = 0;

  newImg.onload = function(){
    catchHeight = newImg.height;
    catchWidth = newImg.width;
    $("#imageholder").css({
      width:catchWidth,
      height:catchHeight
    });

    $("#imageholder").css('background-image','url("'+ newImg.src+'")');

    createOverlayCropper(catchWidth,catchHeight);

  }

  newImg.src = src;
}

function createOverlayCropper(catchWidth,catchHeight){
  $("#overlay").css({
    width:catchWidth,
    height:catchHeight,

  });
  $("#overlay").hide();

  $("#cropper").css({
    width:150,
    height:150,

  });
  $("#cropper").hide();
}
