let username = document.getElementById('username');
        let password = document.getElementById('password');
        let userError = document.getElementById('userError');
        let passError = document.getElementById('passError');
        let flag = 1;

        let form = "Please enter the Username";
        let pass = "Please enter the password";
        function validateform() {
            if (username.value == "") {
                userError.innerHTML = form;
                flag = 0;

            } else if (username.value.length < 8) {
                userError.innerHTML = "User name required 8 Character";
                flag = 0;
            } else {
                userError.innerHTML = "";
                flag = 1;
            }

            if (password.value == "") {
                passError.innerHTML = pass;
                flag = 0;
            } else if (password.value.length < 8) {
                passError.innerHTML = "Password minimum 8 Character";
                flag = 0;
            } else {
                passError.innerHTML = "";
                flag = 1;
            }

            if (flag) {
                return true;
            } else {
                return false;
            }
            return false;
        }
