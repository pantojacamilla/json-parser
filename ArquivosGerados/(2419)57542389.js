PHP&#xD;&#xA;<?php&#xD;&#xA;    if(isset($_GET['query'])){&#xD;&#xA;        $q = strtolower($_GET['query']);&#xD;&#xA;        if($q != '' or $q != null){&#xD;&#xA;            $con = mysqli_connect('localhost', 'root', '', 'search');&#xD;&#xA;            $sql = "SELECT `query` FROM `suggestions` WHERE `query` LIKE '%".$q."%'";&#xD;&#xA;            $res = mysqli_query($con, $sql);&#xD;&#xA;            if(mysqli_num_rows($res) > 0){&#xD;&#xA;                $matched = [];&#xD;&#xA;                $temp = [];&#xD;&#xA;                while($row = mysqli_fetch_assoc($res)){&#xD;&#xA;                    $query = strtolower($row['query']);&#xD;&#xA;                    array_push($temp, $query);&#xD;&#xA;                }&#xD;&#xA;                array_unique($temp);&#xD;&#xA;                $matched = preg_grep("/^".$q.".*?/", $temp);&#xD;&#xA;                array_unique($matched);&#xD;&#xA;                array_splice($matched, 6, count($matched) - 6);&#xD;&#xA;                foreach($matched as $match){&#xD;&#xA;                    $mes = "<span class='suggestions-a' onmouseleave='selected=false;' onmouseenter='selected=true;' onclick='change_omni(\"".$match."\")'>".$match."</span><br/>";&#xD;&#xA;                    echo $mes;&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            mysqli_close($con);&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;?>&#xD;&#xA;I do not why it is showing duplicate value. I was unable to figure out why. I tried many thing,&#xD;&#xA; - array_unique() in the php code&#xD;&#xA; - checking and removing duplicate span tags in the javascript&#xD;&#xA;All the code related to this problem is posted above. Please tell me the reason for this. &#xD;&#xA;  [1]: https://i.stack.imgur.com/2MhnB.png&#xD;&#xA;  [2]: https://i.stack.imgur.com/BHc2h.png