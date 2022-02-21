var form = document.querySelector("form"); 

var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var firstName = document.querySelector(".name");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var adress = document.getElementById("adress");

var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");  
var errorPhone = document.getElementById("errorPhone");  
var errorGeneral = document.getElementById("feedbackError");

function validate() {

    form.addEventListener('submit', (event) => {

        /* FIRST NAME */
        if (!inputLength(firstName)) {

            event.preventDefault();
            var empty = firstName.nextElementSibling;
            empty.innerHTML = "First name must have only letters and a minimum of 3 characters.";
            firstName.classList.add("is-invalid");

        } else if (!(/^[a-zA-Z]+$/.test(firstName.value))) {

            event.preventDefault();
            var errorName = firstName.nextElementSibling;
            errorName.innerHTML = "First name can not have numbers.";
            firstName.classList.add("is-invalid");

        } else {
            firstName.classList.remove("is-invalid");
        }

        /* LAST NAME */
        if (!inputLength(lastName)) {

            event.preventDefault();
            var empty = lastName.nextElementSibling;
            empty.innerHTML = "Last name must have only letters and a minimum of 3 characters.";
            lastName.classList.add("is-invalid");

        } else if (!(/^[a-zA-Z]+$/.test(lastName.value))) {

            event.preventDefault();
            var errorName = lastName.nextElementSibling;
            errorName.innerHTML = "Last name can not have numbers.";
            lastName.classList.add("is-invalid");

        } else {
            lastName.classList.remove("is-invalid");
        }

        /* PHONE */
        if (!inputLength(phone)) {

            event.preventDefault();
            var empty = phone.nextElementSibling;
            empty.innerHTML = "Phone must have at least 3 numbers.";
            phone.classList.add("is-invalid");

        } else if (!(/^([0-9])*$/.test(phone.value))){

            event.preventDefault();
            var errorPhone = phone.nextElementSibling;
            errorPhone.innerHTML = "Phone can only read numbers.";
            phone.classList.add("is-invalid");

        } else {
            phone.classList.remove("is-invalid");
        }

        /* PASSWORD */
        if (!inputLength(password)) {

            event.preventDefault();
            var empty = password.nextElementSibling;
            empty.innerHTML = "Password must have both letters and numbers, and also a minimum of 3 characters.";
            password.classList.add("is-invalid");

        } else if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/.test(password.value))){

            event.preventDefault();
            var errorPassword = password.nextElementSibling;
            errorPassword.innerHTML = "Password must have both letters and numbers, and also a minimum of 3 characters.";
            password.classList.add("is-invalid");

        } else {
            password.classList.remove("is-invalid");
        }

        /* EMAIL */
        if (!inputLength(email)) {

            event.preventDefault();
            var empty = email.nextElementSibling;
            empty.innerHTML = "Email must have a minimum of 3 characters.";
            email.classList.add("is-invalid");

        } else if (!(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(email.value)){

            event.preventDefault();
            var errorEmail = email.nextElementSibling;
            errorEmail.innerHTML = "Invalid email format.";
            email.classList.add("is-invalid");

        } else {
            email.classList.remove("is-invalid");
        }

        /* ADRESS */
        if (!inputLength(adress)) {

            event.preventDefault();
            var empty = adress.nextElementSibling;
            empty.innerHTML = "Adress must have a minimum of 3 characters.";
            adress.classList.add("is-invalid");

        } else {
            adress.classList.remove("is-invalid");
        }

    }, {once: true});
    
}

function inputLength (input) {

    if (input.value.length < 3) {
        return false;
    } else {
        return true
    }

}