/* 
 * Code Outline:
 * 
 *
  */



window.addEventListener('load', function(){
  console.log('Window loaded')

  const confirmPassword = document.getElementById('confirm-password-input');
  const password = document.getElementById('password-input').value;

  function validatePassword(){
    if(password === confirmPassword.value){
      confirmPassword.setCustomValidity('');
    }
    else
      confirmPassword.setCustomValidity('Passwords must match');
  }


  confirmPassword.addEventListener('change', validatePassword)
  confirmPassword.addEventListener('input', validatePassword)

})
