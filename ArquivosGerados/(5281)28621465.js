    <?php&#xD;&#xA;        @$cat_id=$_GET['cat_id'];&#xD;&#xA;        &#xD;&#xA;        $mn=split(",",$cat_id); // creating array &#xD;&#xA;        while (list ($key, $val) = each ($mn)) { &#xD;&#xA;            &#xD;&#xA;            if(!is_numeric($val)){  // checking each element &#xD;&#xA;                echo "Data Error ";&#xD;&#xA;                exit;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;          &#xD;&#xA;        global $id_mysql;&#xD;&#xA;        $query = "SELECT nama,id FROM KOTA WHERE id_prov IN ($cat_id)";&#xD;&#xA;        $row = mysqli_query($id_mysql, $query);&#xD;&#xA;        $result = mysqli_fetch_assoc($row);&#xD;&#xA;        &#xD;&#xA;        $main = array('data'=>$result);&#xD;&#xA;        echo json_encode($main);&#xD;&#xA;    ?>