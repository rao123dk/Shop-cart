<?php

 $data = file_get_contents("php://input");
    $request = json_decode($data);
    $billnumber = $request->billnumber;
    $products = $request->products;
    $quantity = $request->quantity;
    $price = $request->price;


$servername = "localhost";
$username = "root";
$password = "root"; //Your User Password
$dbname = "dkumar_angularapp"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO shop_cart (serial_number , bill_number , product_name , quantity, price  )
VALUES (0,$billnumber, $products, $quantity , $price)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>