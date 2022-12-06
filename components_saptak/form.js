var validate = function(e) {
  var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
  var  ;
  var removeSpan;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        
          if (fields[i].nextElementSibling.classList.contains('error')) {
            removeSpan = fields[i].nextElementSibling;
            var parent = fields[i].parentNode;
            parent.removeChild(removeSpan);
            fields[i].nextElementSibling.innerHTML = fields[i].placeholder + " is required";
            check = false;
            errArr.push(fields[i]);
          }
          fields[i].nextElementSibling.innerHTML = fields[i].placeholder + " is required";
          check = false;
          errArr.push(fields[i]);
      } else {

          // check if message and name values contain valid characters.
          if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
              val = isValidChar(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                check = true;
              }
          }
        
          if(fields[i].id === 'phone') {
            val = isValidPhone(fields[i]);
            if(val === false) {
              fields[i].nextElementSibling.innerHTML = "Phone number is not valid";
              check = false;
              errArr.push(fields[i]);
            } else {
              fields[i].nextElementSibling.innerHTML = "";
              check = true;  
            }
          }

          if (fields[i].id === 'email') {
              val = isValidEmail(fields[i]);
              if(val === false) {
                  fields[i].nextElementSibling.innerHTML = "Email address is not valid";
                  check = false;
                  errArr.push(fields[i]);
              } else {
                  fields[i].nextElementSibling.innerHTML = "";
                  check = true;
              }
          }
      }
  }
  
  return check

  // Helper functions.
  function isValidEmail(e) {
      regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var email = e.value;
      if (!regEx.test(email)) {
          return false;
      }
  }

  function isValidChar(e) {
      regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
      var value = e.value;
      if (!regEx.test(value)) {
          return false;
      }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if(!regEx.test(value)) {
      return false;
    }
  }

};