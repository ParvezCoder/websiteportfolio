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
function openAndDownloadCV() {
    const cvUrl = 'your-cv.pdf'; // Update with your correct CV file path
    window.open(cvUrl, '_blank');

    // Trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'ParvezAhmed-CV.pdf'; // Set the file name for download
    link.click();
}
