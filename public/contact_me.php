<?php
header('Access-Control-Allow-Origin: *');
extract($_POST);

class correo
{
   public function __construct(){
      header('Access-Control-Allow-Origin: *');
   }

   public function data($name,$email,$phone,$message){
      // Create the email and send the message
      $to = 'jhonnyjose1998@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
      $email_subject = "Contacto de sitio web:  $name";
      $email_body = "Has recibido un nuevo mensaje, del formulario de contacto de tu portafolio.\n\n"."Aqui estan los detalles:\n\Nombre: $name\n\Correo: $email\n\Telefono: $phone\n\Mensaje:\n$message";
      $headers = "De: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
      $headers .= "Reply-To: $email";   
      $success = mail($to,$email_subject,$email_body,$headers);
      if ($success) {
         $response = array('data' => 'correo enviado con exito!');
         return $response;
      }else{
         $response = array('data' => 'correo no enviado!');
         return $response;
      }
   }
}

$obj = new correo;
$json = $obj->data($name,$email,$phone,$message);
echo json_encode($json);
?>