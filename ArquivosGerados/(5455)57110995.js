    <?php&#xD;&#xA;    &#xD;&#xA;    //Show the image&#xD;&#xA;    echo '<img src="'.$_POST['img_val'].'" />';&#xD;&#xA;     &#xD;&#xA;    //Get the base-64 string from data&#xD;&#xA;    $filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);&#xD;&#xA;     &#xD;&#xA;    //Decode the string&#xD;&#xA;    $unencodedData=base64_decode($filteredData);&#xD;&#xA;     &#xD;&#xA;    //Save the image&#xD;&#xA;    file_put_contents('/images/image.png', $unencodedData);&#xD;&#xA;    ?>