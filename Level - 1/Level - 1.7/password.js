function validatePassword(pw) {
    const pattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pattern.test(pw);
  }
  
  const txtPassword = document.getElementById("password");
  const pPasswordError = document.getElementById("pwError");
  
  function passwordChanged(){
    const password = txtPassword.value;
    const passwordIsGood = validatePassword(password);
    
    if(passwordIsGood === true){
      pPasswordError.innerText = "";
    }
    else{
      pPasswordError.innerText = "Minimum eight characters, at least one letter, one number and one special character";
    }
  }
  
  txtPassword.addEventListener("input",passwordChanged);
  
  let password = txtPassword.value;
  let passwordIsGood = validatePassword(password);