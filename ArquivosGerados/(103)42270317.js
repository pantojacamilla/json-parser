    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <!----------------------------------------------------------------&#xD;&#xA;                                  HTML&#xD;&#xA;    ----------------------------------------------------------------->&#xD;&#xA;    <form method="post" accept-charset="UTF-8">&#xD;&#xA;    <p>Търсене на храни: <input type="text" name="fsearch" id="food_search"></p>&#xD;&#xA;    </form>&#xD;&#xA;    <div id="food_search_result"></div>&#xD;&#xA;    <!----------------------------------------------------------------&#xD;&#xA;                                  PHP&#xD;&#xA;    ----------------------------------------------------------------->&#xD;&#xA;    <?php&#xD;&#xA;    $hostname = "localhost";&#xD;&#xA;    $username = "gosho";&#xD;&#xA;    $password = "0!ijgls9df";&#xD;&#xA;    $databaseName = "dbName";&#xD;&#xA;    $connect = new mysqli($hostname, $username, $password, $databaseName);&#xD;&#xA;    $fsearch="";&#xD;&#xA;    if(!empty($_POST['fsearch'])) {&#xD;&#xA;    $fsearch = $_POST['fsearch'];&#xD;&#xA;    $req = $connect->prepare("SELECT title FROM food_data_bg WHERE title LIKE ?");&#xD;&#xA;    $value = '%'.$fsearch.'%';&#xD;&#xA;    $req->bind_param('s', $value);&#xD;&#xA;    $req->execute();&#xD;&#xA;    $req->store_result();&#xD;&#xA;    $num_of_rows = $req->num_rows;&#xD;&#xA;    $req->bind_result($title);&#xD;&#xA;    if ($req->num_rows == 0){&#xD;&#xA;    echo 'Няма резултати';&#xD;&#xA;    }&#xD;&#xA;    else{&#xD;&#xA;    while($data=$req->fetch()){&#xD;&#xA;       ?>&#xD;&#xA;           <div class="search-result">&#xD;&#xA;               <span class="result-title"><?php echo $title; ?></span>&#xD;&#xA;           </div>&#xD;&#xA;           <?php&#xD;&#xA;           }&#xD;&#xA;    var_dump($_POST['fsearch']);&#xD;&#xA;    $req->free_result();&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    ?>