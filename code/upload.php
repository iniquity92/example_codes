<?php
    if(!isset($_FILES['data']['name'])){
        echo "No file to upload";     
    } 
    else{
        $types = array('image/jpeg','image/jpg','image/png','image/svg');
        if(!in_array($_FILES['data']['type'],$types)){
            echo "Invalid file type";
        }
        else{
            $target = 'static/img/'.$_FILES['data']['name'];
            $source = $_FILES['data']['tmp_name'];
            $name = $_FILES['data']['name'];
            $file_type = $_FILES['data']['type'];
            $size = $_FILES['data']['size'];
            if(!move_uploaded_file($source,$target)){
                echo "Can't upload file!";
            }
            else{
                $con = new mysqli("localhost","root","","code");
                if($con->connect_errno){
                    echo "Failed to connect to db".$con->connect_error;
                }
                else{
                    $query = 'insert into images (name,url,type,size)
                        values
                        ("'.$name.'","'.$target.'","'.$file_type.'","'.$size.'")';
                    if(!$con->query($query)){
                        echo $con->error;
                    }
                        
                }
                print_r($_FILES);
            }    
        }
    }
?>         
            