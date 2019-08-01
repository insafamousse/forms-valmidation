
function validation() {
    console.log('test')
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var comments = document.getElementById('comments').value;

    var emailchek = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var  passwordchek = /^?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (name === '') {
        document.getElementById('nomprenomerror').innerHTML = "**This fieled is required";
    } else {
        document.getElementById('nomprenomerror').innerHTML = "";
    }

    if (address === '') {
        document.getElementById('addresserror').innerHTML = "**This fieled is required";
    } else {
        document.getElementById('addresserror').innerHTML = "";
    }


    if (email === '') {
        document.getElementById('emailerror').innerHTML = "**This fieled is required";
    } else if (emailchek.test(email)) {
        document.getElementById('emailerror').innerHTML = "";
    } else {
        document.getElementById('emailerror').innerHTML = "**e-mail is invalid";
    }

    if (password === '') {
        document.getElementById('passworderror').innerHTML = "**This fieled is required";
    } else if (passwordchek.test(password)) {
        document.getElementById('passworderror').innerHTML = "";
    } else {
        document.getElementById('passworderror').innerHTML = "**password is invalid";
    }

    if (comments === '') {
        document.getElementById('commenterror').innerHTML = "**This fieled is required";
    } else {
        document.getElementById('commenterror').innerHTML = "";
    }
}
