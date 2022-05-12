/* 
 * Code Outline:
 * 
 *
  */



window.addEventListener('load', function(){
  console.log('Window loaded')

  const validation = validation || {};
  const confirmPassword = document.getElementById('confirm-password-input');

  validation.validatePassword = function validatePassword(){
    if(password === confirmPassword.value){
      confirmPassword.valid = true;
    }
    const password = document.getElementById('password-input').value;
    console.log(password);
  }


  confirmPassword.addEventListener('change', validatePassword)

})
