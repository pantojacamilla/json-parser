    <?php&#xD;&#xA;     require_once("configur.php");&#xD;&#xA;    	&#xD;&#xA;    $query='UPDATE profile_table SET   images="'.$_FILES['file']['name'].'"&#xD;&#xA;    WHERE email= "'.$_SESSION['email'].'"';&#xD;&#xA;    if ($mysqli->query($query) === TRUE) {&#xD;&#xA;        echo "Record updated successfully";&#xD;&#xA;    } else {&#xD;&#xA;        echo "Error updating record: " . $conn->error;&#xD;&#xA;    }&#xD;&#xA;    $mysqli->close();&#xD;&#xA;    ?>&#xD;&#xA;    <?php&#xD;&#xA;    include('configur.php');&#xD;&#xA;     if($_POST)&#xD;&#xA;     { &#xD;&#xA;     // $_FILES["file"]["error"] is HTTP File Upload variables $_FILES["file"] "file" is the name of input field you have in form tag.&#xD;&#xA;     &#xD;&#xA;     if ($_FILES["file"]["error"] > 0)&#xD;&#xA;     {&#xD;&#xA;     // if there is error in file uploading &#xD;&#xA;     echo "Return Code: " . $_FILES["file"]["error"] . "<br />";&#xD;&#xA;     &#xD;&#xA;     }&#xD;&#xA;     else&#xD;&#xA;     {&#xD;&#xA;     // check if file already exit in "images" folder.&#xD;&#xA;     if (file_exists("upload/" . $_FILES["file"]["name"]))&#xD;&#xA;     {&#xD;&#xA;     &#xD;&#xA;     }&#xD;&#xA;     else&#xD;&#xA;     {  //move_uploaded_file function will upload your image. &#xD;&#xA;     if(move_uploaded_file($_FILES["file"]["tmp_name"],"upload/" . $_FILES["file"]["name"]))&#xD;&#xA;     {&#xD;&#xA;     // If file has uploaded successfully, store its name in data base&#xD;&#xA;     $query_image = "insert into profile_table";&#xD;&#xA;      &#xD;&#xA;     if(mysqli_query($link, $query_image))&#xD;&#xA;     {&#xD;&#xA;     echo "Stored in: " . "upload/" . $_FILES["file"]["name"];&#xD;&#xA;     }&#xD;&#xA;     else&#xD;&#xA;     {&#xD;&#xA;     echo'';&#xD;&#xA;     }&#xD;&#xA;     }&#xD;&#xA;     }&#xD;&#xA;     &#xD;&#xA;     }&#xD;&#xA;     }&#xD;&#xA;     ?>