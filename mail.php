<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $project_name = $_POST["project_name"];
    $admin_email = $_POST["zhumakhadyrs@gmail.com"];
    $form_subject = $_POST["form_subject"];
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $phone = $_POST["Phone"];

    // Construct email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";

    // Send the email
    $result = mail($admin_email, $form_subject, $message);

    if ($result) {
        echo "Message sent successfully.";
    } else {
        echo "Error: Unable to send message.";
    }
} else {
    echo "Error: Invalid request method.";
}
?>

