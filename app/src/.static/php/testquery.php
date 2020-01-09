<?php

$hostname = "LMIL-US001337-1\MSSQLSERVER01";
$connectionInfo = array("Database"=>"AccessControl");

$conn = sqlsrv_connect($hostname,$connectionInfo);

if (!$conn){
	echo "Could not connect to database.\n";
	echo print_r(sqlsrv_errors(),true);
} else {
	echo "Database connection established.\n";
	$query = "SELECT * FROM dbo.badgetyp";

	$result = sqlsrv_query($conn, $query);

	if (!$result){
		echo "Query failed.\n";
		echo print_r(sqlsrv_errors(),true);
	} else {

	echo print_r(sqlsrv_fetch_array($result),true);

	for ($i = 0; $i < sqlsrv_num_rows($result); ++$i)
	     {
	         $line = sqlsrv_fetch_row($result);
	         print("$line[0] - $line[1]\n");
	     }
	echo "done.";
	}


}
?>