    <?php&#xD;&#xA;    session_start();&#xD;&#xA;    if(isset($_GET['login'])) {&#xD;&#xA;    	$user = $_POST['user'];&#xD;&#xA;    	&#xD;&#xA;    	if ($user == "test") {&#xD;&#xA;    		$_SESSION['username'] = $user;&#xD;&#xA;    		header('Location: site2.php');&#xD;&#xA;    	} else {&#xD;&#xA;    		echo "<script>&#xD;&#xA;    		  var error_login = 1;&#xD;&#xA;    	   </script>";&#xD;&#xA;    	}&#xD;&#xA;    }