function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msg').value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'parvezcoder786@gmail.com' // Your email
    };

    emailjs.send('service_xvky2xu', 'template_j9wxblb', templateParams, "C4b5-1sg2WE1pHNb2")
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again.');
        });
}
