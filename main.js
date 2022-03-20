const formbox = document.querySelector('form');
const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var emailaddress = document.querySelector('[name="email"]');
var buttoncheck = document.querySelector('[name="notify"]');

buttoncheck.addEventListener('click', EmailVerifiedCheck);

function EmailAddressCheck() {
    var addressvalue = emailaddress.value;
    if (addressvalue.match(emailformat)) {
        return 1;
    } else {
        return 0;
    }
}

function EmailVerifiedCheck() {
    var addressvalue = emailaddress.value;
    if (addressvalue != "" & EmailAddressCheck() == 0) {
        IsEmailAddressBlank(0);
    } else if (addressvalue == "") {
        IsEmailAddressBlank(1);
    } else {
        document.querySelector(".container__errorbox").style.display = "none";
        emailaddress.style.border = "1px solid hsla(0, 0%, 59%, 60%)";
        alert("Thank You for subcribe us!");
    }
}

function IsEmailAddressBlank(self) {
    document.querySelector(".container__errorbox").style.display = "block";
    emailaddress.style.border = "1px solid hsl(354, 100%, 66%)";

    var textbox = document.querySelector(".container__errorbox")
    if (self == 1) {
        textbox.textContent = "Please input your address"
    } else if (self == 0) {
        textbox.textContent = "Please provide a valid email address"
    }
}