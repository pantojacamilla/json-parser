<?php include_once 'includes/dbconnect.php';&#xD;&#xA; $name = $_POST['name'];&#xD;&#xA; $year = $_POST['year'];&#xD;&#xA; $term= $_POST['term'];&#xD;&#xA; $semester= $_POST['semester'];&#xD;&#xA; $class= $_POST['class'];&#xD;&#xA; $query = "SELECT * FROM hostelfee WHERE RegNo = '$name' AND PayYear='$year' AND PayTerm='$term' AND PaySemester='$semester' AND PayClass='$class' ";&#xD;&#xA; $result = mysqli_query($conn, $query);&#xD;&#xA; while ($row = mysqli_fetch_array($result)) {&#xD;&#xA;     echo json_encode($row); &#xD;&#xA; } &#xD;&#xA;?>