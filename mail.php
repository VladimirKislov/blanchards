<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $name = htmlspecialchars($name);
  $phone = htmlspecialchars($phone);

  $name = urldecode($name);
  $phone = urldecode($phone);

  $name = trim($name);
  $phone = trim($phone);

  $to = "testvk@internet.ru";
  $subject = "Заявка c сайта Blanchards";


  $msg = "
    Имя: $name
    Телефон: $phone";

  if (mail($to, $subject, $msg)) {
    echo('Спасибо, форма отправлена!');
  } else {
    echo('Error');
  }

?>

