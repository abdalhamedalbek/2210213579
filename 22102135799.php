<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Example: Just displaying the message (You can integrate email sending here)
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>We have received your message:</p>";
    echo "<p><strong>$message</strong></p>";
} else {
    echo "Invalid Request.";
}
?>
