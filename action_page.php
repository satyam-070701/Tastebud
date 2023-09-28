<?php
// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve and process the form data
    $firstname = $_POST["firstname"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zip = $_POST["zip"];
    
    $cardname = $_POST["cardname"];
    $cardnumber = $_POST["cardnumber"];
    $expmonth = $_POST["expmonth"];
    $expyear = $_POST["expyear"];
    $cvv = $_POST["cvv"];
    
    // Here, you can perform further data processing, validation, or storage
    // For this example, we'll simply print the received data

    echo "Received Billing Information:<br>";
    echo "Full Name: " . $firstname . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Address: " . $address . "<br>";
    echo "City: " . $city . "<br>";
    echo "State: " . $state . "<br>";
    echo "Zip: " . $zip . "<br>";
    
    echo "<br>Received Payment Information:<br>";
    echo "Accepted Cards: " . implode(", ", $cardname) . "<br>";
    echo "Name on Card: " . $cardname . "<br>";
    echo "Credit Card Number: " . $cardnumber . "<br>";
    echo "Exp Month: " . $expmonth . "<br>";
    echo "Exp Year: " . $expyear . "<br>";
    echo "CVV: " . $cvv . "<br>";

    // You can add additional processing or data storage code here
} else {
    // If the form was not submitted via POST, you can handle it here
    echo "Form not submitted.";
}
?>