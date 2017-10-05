function closeMain() {
    var main = document.getElementsByClassName("main")[0];
    main.classList.remove("main");
    main.classList.add("main-close");
}

function checkInput() {
    var userPatt = new RegExp(/^[0-9a-z\-\/_]+$/);
    var passPatt = new RegExp(/[^\s]{8,}$/);
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(userPatt.test(username) && passPatt.test(password))
    {
        var main = document.getElementsByClassName("main")[0];
        main.classList.remove("main");
        main.classList.add("main-close");
        alert("Login successful")
    }
    if (!userPatt.test(username))
    {
        var us = document.getElementById("username");
        us.classList.remove("input");
        us.classList.add("inputFail");
        alert("Please enter only a-z/_/-/0-9")
    }
    if(!passPatt.test(password))
    {
        var pas = document.getElementById("password");
        pas.classList.remove("input");
        pas.classList.add("inputFail");
        alert("Please enter at least 8 characters without space")
    }
}