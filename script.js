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


    function downloadBtn() {
        alert("CV download Successfully")
    }
        let submit = document.getElementById("submit")
        submit.addEventListener("click", function () {
            let name = document.getElementById("name")
        let email = document.getElementById("email")
        let msg = document.getElementById("msg")
        if (email.value == "" || msg.value == "" ||  name.value == "" ) {
            alert("please fill field")
        }
        else{
            alert("thanks for contact")
        }
    })
    