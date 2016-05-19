 $("#data").on('submit',function(e){
                //var img = document.createElement("img");
               // document.body.appendChild(img);
               e.preventDefault();
                sendFile(this);
            });
            function sendFile(file) {
            var uri = "crop.php";
            var xhr = new XMLHttpRequest();
            var fd = new FormData(file);

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Handle response.
                    var arr = JSON.parse(xhr.responseText); // handle response.

                    cropImage = new Image();

                    cropImage.src = arr['src'];

                    $("#croparea").hide();

                    $("#cropped_img").html(cropImage);
                    $("#debug").html('x='+arr['x']+'y='+arr['y']+'h='+arr['h']+'w='+arr['w']);
                    $("#cropped").show();
                }
            };
            //fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }
