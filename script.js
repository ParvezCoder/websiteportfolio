async function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('msg').value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'parvezcoder786@gmail.com' // Your email
    };

    try {
        let response = await email.send('service_xvky2xu', 'template_j9wxblb', templateParams);
        alert('Message sent successfully!');
    } catch (error) {
        alert('Failed to send the message. Please try again.');
    }
}
