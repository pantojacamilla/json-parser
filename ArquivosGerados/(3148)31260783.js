    <?php &#xD;&#xA;    $db = new mysqli('fdb4.freehostingeu.com', '1584066_users', '159632XyZ', '1584066_users');&#xD;&#xA;    &#xD;&#xA;    if($db->connect_errno > 0){&#xD;&#xA;        die('Unable to connect to database [' . $db->connect_error . ']');&#xD;&#xA;    }&#xD;&#xA;    $db->set_charset("utf8");&#xD;&#xA;    if(!$result = $db->query("SELECT * FROM mtp ORDER BY date DESC")){&#xD;&#xA;        die('There was an error running the query [' . $db->error . ']');&#xD;&#xA;    } &#xD;&#xA;    &#xD;&#xA;    while($row = mysqli_fetch_assoc($result)){&#xD;&#xA;        $row["date"] = strtotime($row["date"]) * 1000;&#xD;&#xA;        $records[] = $row;&#xD;&#xA;    }&#xD;&#xA;    print( json_encode($records));&#xD;&#xA;    $result->free();&#xD;&#xA;    $db->close();&#xD;&#xA;    ?>