<?php
  if(!(isset($_POST['X'])&&isset($_POST['Y'])
       &&isset($_POST['H'])&&isset($_POST['W'])
       &&isset($_FILES['toCrop']['name']))){

        echo "One or more parameters required for cropping are missing";
  }

  else{

        $image_resource = imagecreatefromjpeg($_FILES['toCrop']['tmp_name']);
        $crop_array = array('x'=>$_POST['X'],
                            'y'=>$_POST['Y'],
                            'height'=>$_POST['H'],
                            'width'=>$_POST['W']
                           );
        $newImg = imagecrop($image_resource,$crop_array);
        $target = 'crop'.time().$_FILES['toCrop']['name'];
        //move_uploaded_file(imagejpeg($newImg,$_FILES['toCrop']['name']),$target);
        ob_start();
        header('Content-Type: image/jpeg');
        imagejpeg($newImg,$target);
        imagedestroy($image_resource);
        ob_clean();
        echo '{"src":"'.$target.'","x":"'.$_POST['X'].'","y":"'.$_POST['Y'].'","h":"'.$_POST['H'].'","w":"'.$_POST['W'].'"}';
        unset($_POST);
        unset($_FILES);

  }
?>
