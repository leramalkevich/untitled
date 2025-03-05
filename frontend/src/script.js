window.onload = function () {

    let form = document.getElementById('form');
    let name = form[0];
    let lastName = form[1];
    let email = form[2];
    let phone = form[3];
    let password = form[4];


    form.onsubmit = function (event) {
        event.preventDefault();

        if (validateForm(form) === false) {
            return false;
        } else {
            event.preventDefault();
        }
    }

    function validateForm() {
        let isValid = true;

        if (!name.value || !name.value.match(/^[A-Z][a-z]+\s*$/)) {
            name.classList.add('invalid');
            isValid = false;
        } else {
            name.classList.remove('invalid');
        }
        if (!lastName.value || !lastName.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            lastName.classList.add('invalid');
            isValid = false;
        } else {
            lastName.classList.remove('invalid');
        }
        if (!email.value || !email.value.match(/^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})*$/)) {
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.remove('invalid');
        }

        if (!phone.value && !phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            phone.classList.add('invalid');
            isValid = false;
        } else {
            phone.classList.remove('invalid');
        }
        if (!password.value && !password.value.match(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/)) {
            password.classList.add('invalid');
            isValid = false;
        } else {
            password.classList.remove('invalid');
        }

        return isValid;
    }
}