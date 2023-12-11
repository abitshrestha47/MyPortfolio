<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "abitshrestha2080@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";
    $mailBody = "Name: $name\n";
    $mailBody .= "Phone: $phone\n";
    $mailBody .= "Email: $email\n\n";
    $mailBody .= "Message:\n$message\n";

    mail($to, $subject, $mailBody, $headers);
}
?>
