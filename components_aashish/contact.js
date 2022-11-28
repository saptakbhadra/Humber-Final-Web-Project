window.onload = function () {
    document.getElementById('sendnow').onclick = validate;
  };
  
  function validate()                    // To validate the data entered by the user
  {                                           
    console.log('hi');
    let name = document.querySelector('#name');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    let email = document.querySelector('#email');
    let emailpattern = /^[a-zA-Z0-9@.]{2,30}$/;
    if (name.value == '') {                                         // checks for valid name given by the user within the defined parameters
      name.nextElementSibling.innerHTML = 'please enter your name';
    } else if (!namepattern.test(name.value)) {
      name.nextElementSibling.innerHTML =
        'please enter name using letters only';
    } else {
      name.nextElementSibling.innerHTML = 'valid name';
    }
    if (email.value == '') {                                        // checks for valid email given by the user within the defined parameters
      email.nextElementSibling.innerHTML = 'please enter your email';
    } else if (!emailpattern.test(email.value)) {
      email.nextElementSibling.innerHTML =
        'please enter email using valid characters only';
    } else {
      email.nextElementSibling.innerHTML = 'valid email';
    }
  }

  