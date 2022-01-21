function sendmail() {
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  this.contact_number.value = Math.random() * 100000 | 0;

    emailjs.send("service_x4cad6s","template_f55f0z9",{
        from_name: document.getElementById('user_name').value,
        message: document.getElementById('message').value,
        mail_subject: document.getElementById('mail_subject').value,
        from_mail: document.getElementById('user_email').value,
        }).then(function() {
              console.log('SUCCESS!');
              window.alert("Messaggio inviato correttamente!");
          }, function(error) {
              console.log('FAILED...', error);
              window.alert("Messaggio non inviato! Per favore, ritenta.");
          });

  });



}
