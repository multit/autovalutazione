<?php
echo "test";
//phpinfo();

$username = "df";
$password = "";
$hostname = "localhost";

$task 	= $_GET["task"];
$Q1 	= $_GET["Q1"];
$Q2 	= $_GET["Q2"];
$Q3 	= $_GET["Q3"];



//connection to spesa db
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL: " . $hostname);

mysql_set_charset('utf8',$dbhandle);

//select a eventbase to work with
$selected = mysql_select_db("test",$dbhandle)
  or die("Could not select test");

if ($task=='select') {
        $sth = mysql_query("SELECT * FROM sondaggioLes");
        $rows = array();
        
        while($r = mysql_fetch_assoc($sth)) {
                $rows[] = $r;
        }
        //print json_encode($rows);
        $data = json_encode($rows) ;
        if (array_key_exists('callback', $_GET)) {
  	      		header('Content-Type: text/javascript; charset=utf8');
//	        	header('Access-Control-Allow-Origin: http://127.0.0.1:9000');
	        	header('Access-Control-Allow-Origin: http://localhost');	        	
	            header('Access-Control-Max-Age: 3628800');
                header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, JSON');
                $callback = $_GET['callback'];
				echo $callback.'({ "lista":'.$data.'});';
        } else {
            	//normal JSON string	
            	header('Content-Type: application/json; charset=utf8');
                echo $data;
        }
}


elseif ($task=='insert') {
        $sql = "INSERT INTO sondaggioLes (Q1,Q2,Q3) VALUES('$Q1','$Q2','$Q3') ;";

        if (!mysql_query($sql,$dbhandle ))
        {
                header('Access-Control-Allow-Origin: http://localhost');
                die('Error query: ' . $sql );
        } else {
                header('Access-Control-Allow-Origin: http://localhost');
                echo "record added";
        }
}
else {	
	echo 'no task, here';
}

mysql_close($dbhandle);

?>