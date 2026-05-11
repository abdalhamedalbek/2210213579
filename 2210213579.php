<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name    = htmlspecialchars($_POST['name']);
  $email   = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to      = "youremail@example.com";
  $subject = "New Contact Message from CV Website";
  $headers = "From: \$email" . "\r\n" .
             "Reply-To: \$email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  $body = "Name: $namenEmail: $emailnMessage: $message";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Something went wrong.";
  }
}
?>