let btns = document.querySelectorAll(".btn")
btns.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        if (buttons.attributes.id.value == "ui") {
            document.getElementById("uiDesign").style.display = "block"
            document.getElementById("webDesign").style.display = "none"
            document.getElementById("android").style.display = "none"
        }
        if (buttons.attributes.id.value == "web") {
            document.getElementById("uiDesign").style.display = "none"
            document.getElementById("webDesign").style.display = "block"
            document.getElementById("android").style.display = "none"
        }
        if (buttons.attributes.id.value == "mobile") {
            document.getElementById("uiDesign").style.display = "none"
            document.getElementById("webDesign").style.display = "none"
            document.getElementById("android").style.display = "block"
        }
        else if (buttons.attributes.id.value == "all") {
            document.getElementById("uiDesign").style.display = "block"
            document.getElementById("webDesign").style.display = "block"
            document.getElementById("android").style.display = "block"


        }
    })
})
function openAndDownloadCV() {
    const link = document.createElement('a');
    link.href = 'your-cv.pdf';;
    link.download = 'ParvezAhmed-CV.pdf'; // Set the file name for download
    link.click();
}
    // Get the menu icon and the ul (menu list)
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('ull');
    const navLinks = document.querySelectorAll('#ull li a'); // Get all nav links

    // Add click event listener to the menu icon for toggling the menu
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show'); // Toggle the "show" class on the menu
    });

    // Add click event listener to each navigation link to hide the menu when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show'); // Hide the menu after clicking a link
        });
    });


    async function sendEmail() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('msg').value;
    
        var templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'parvezcoder786@gmail.com'  // Your email
        };
    
        try {
            let response = await emailjs.send('service_xvky2xu', 'template_j9wxblb', templateParams, "C4b5-1sg2WE1pHNb2");
            alert('Message sent successfully!');
        } catch (error) {
            alert('Failed to send the message. Please try again.');
        }
    }
    
    