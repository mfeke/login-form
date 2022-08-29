function cheackData() {
    let enterUsername = document.getElementById("signupUsername").value;
    let enterPassword = document.getElementById("signupPassword").value;

    var getUsername = localStorage.getItem("userName");
    var getPassword = localStorage.getItem("password");
    if (enterUsername ===getUsername )  {

        if(enterPassword === getPassword){
            alert("Loagin Successful");

        } else{
            alert("Wrong password");
        }


    }else {
        alert("Invaild datails ");
    }

    
}

function addData() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmailAddress").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupCofirmPassword").value;

    localStorage.setItem("userName", username);
    localStorage.setItem("emailAddress", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirm", confirmPassword);

    console.log(addData)
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupEmailAddress" && e.target.value.length > 0  && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});