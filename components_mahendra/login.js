window.onload = function () {
    document.getElementById('buttonstyle').onclick = validate;
  };
  
  function validate() {
    let emailf = document.querySelector('#email');
    console.log(emailf.value);
    let emailpattern = /^[A-Za-z0-9+_.-]+@(.+)$/;
    let passwordf = document.querySelector('#password');
    let passwordpattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (emailf.value == '') {
      emailf.nextElementSibling.style.color = 'red';
      emailf.nextElementSibling.innerHTML = 'please enter email';
    } else if (!emailpattern.test(emailf.value)) {
      emailf.nextElementSibling.style.color = 'red';
      emailf.nextElementSibling.innerHTML = 'please enter a valid email';
    } else {
      emailf.nextElementSibling.style.color = 'green';
      emailf.nextElementSibling.innerHTML = 'valid email';
    }
    if (passwordf.value == '') {
        passwordf.nextElementSibling.style.color = 'red';
        passwordf.nextElementSibling.innerHTML = 'please enter password';
      } else if (!passwordpattern.test(passwordf.value)) {
        passwordf.nextElementSibling.style.color = 'red';
        passwordf.nextElementSibling.innerHTML = 'please enter a valid passsword';
      } else {
        passwordf.nextElementSibling.innerHTML = '';
      }
  }

let loginImages = [
    '/images_mahendra/loginimg.jpg',
    '/images_mahendra/loginimg3.jpg',
    '/images_mahendra/loginimg2.jpg',
    '/images_mahendra/loginimg6.jpg',
];
let imgNum = 0;
let diff = loginImages.length - 1;
let delay = 5000;
setInterval('AutoImages(1)', delay);

function AutoImages(direction) {
    imgNum = imgNum + direction;
    if (imgNum > diff) {
        imgNum = 0;
    }
    if (imgNum < 0) {
        imgNum = diff;
    } 
    document.getElementById('forminfo2').style.backgroundImage = `url(${loginImages[imgNum]})`;
} 
