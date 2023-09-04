const loginForm = document.querySelector('.login-form')

console.log(loginForm)

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("Всі поля повинні бути заповнені!🤷‍♂️")
    } else {
        const formObjectToSend = {
            email: email,
            password: password,
        }
        console.log(formObjectToSend)
        form.reset();
    }


    
}
