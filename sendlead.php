<?php
include ('includes/class.phpmailer.php');
include ('includes/class.smtp.php');
include ('includes/class.exception.php');

$to = 'yuda8855@gmail.com';
$to_2 = 'yuda8855@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer();
try {
    //Server settings
    $mail->SMTPDebug = 4;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";};
   // $mail->Host = '192.168.160.7';  					// Specify main and backup SMTP servers
    $mail->SMTPAuth = false;                               // Enable SMTP authentication
    $mail->Port = 25;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('noreply@jude2go.com',' jude2go contact form');
    $mail->addAddress($to, $name);     // Add a recipient            // Name is optional
    $mail->addAddress($to_2, $name);     // Add a recipient            // Name is optional
    $mail->addReplyTo('noreply@jude2go.com', 'jude2go contact form');
	$mail->CharSet = 'UTF-8';

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'ליד מתוך דף jude2go ';
    $mail->Body    = '<h1>זו הודעה מתוך jude2go</h1><br/>
    <h2><strong>הודעה: </strong>' .$message . "<br/>"
        .'<strong>אימייל: </strong>'. $email ."<br/>"
        .'<strong>שם: </strong>'. $name . '</h2>';
//    $mail->Body    = $email;
//    $mail->Body    = $name;
        
        
        
//        '<html dir="rtl" >
//    <body style="text-align:right; color:#000;">
//    <div>
//    <p>טלפון: '$phone'</p>
//    <p>שם: '$name'</p>
//    <p>מייל: '$email'</p>
// 
//    </div></body>
//    </html>';

    $mail->send();
    //echo 'Message has been sent';
} catch (Exception $e) {
   // echo 'Message could not be sent.';
    //echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>