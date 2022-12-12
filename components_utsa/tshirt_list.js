
// let shirtImagesArray=[
//   'images_utsa/merchandise_shirt.jfif',
//   'images_utsa/tshirt1.png',
//   'images_utsa/tshirt2.png'

// ];  
  
//   // Section 2 -------------------------------------------------
//   //make an automatic slide to display the images
//   let ImageNumber = 0;
//   let difference = shirtImagesArray.length - 1;
  
//   let delay = 2000; //milliseconds    1sec=1000milliseconds
  
//   setInterval('ChangeImages(1)', delay);
//   //-1 to show the slide backwards
//   //1 to show the slide forwards
  
//   function ChangeImages(direction) {
//     //begin function
  
//     ImageNumber = ImageNumber + direction;
  
//     if (ImageNumber > difference) {
//       //begin inner first if
//       ImageNumber = 0;
//     } //end inner first if
  
//     if (ImageNumber < 0) {
//       //begin inner second if
//       ImageNumber = difference;
//     } //end inner second if
//     //document.slideshow.src = myImagesArray[ImageNumber];
   
//     document.getElementById('tshirtImage1').src = shirtImagesArray[ImageNumber];

//   } //end function

  const pics = [
   
    ['images_utsa/tshirt1.png',
    'images_utsa/tshirt1(1).png',],
    ['images_utsa/tshirt2.png',
     'images_utsa/tshirt2(1).png'],
    ['images_utsa/tshirt3.png',
     'images_utsa/tshirt3(1).png'],
    [ 'images_utsa/tshirt4.png',
     'images_utsa/tshirt4(1).png'],
    [ 'images_utsa/tshirt5.png',
     'images_utsa/tshirt5(1).png'],
    [ 'images_utsa/tshirt6.png',
     'images_utsa/tshirt6(1).png']

  ];
  
  const originalPics = [
    'images_utsa/tshirt1.png',
    'images_utsa/tshirt2.png',
     'images_utsa/tshirt3.png',
     'images_utsa/tshirt4.png',
     'images_utsa/tshirt5.png',
     'images_utsa/tshirt6.png',

  ];
  
  const divTarget = document.querySelectorAll(".item");
  
  let someInterval; //global variable
  for(let i=0;i<divTarget.length;i++){
    divTarget[i].addEventListener("mouseover", (event) => {
        console.log(event);
        console.log(event.target); //targetting the concerned image div
      const targetDiv = event.target; //data type is a div
      //console.log(targetDiv);
      let counter = 0;
      if (targetDiv.classList.contains("correct0") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct1") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct2") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct3") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct4") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct5") == true) {
        someInterval = setInterval(() => {
          targetDiv.src = pics[i][counter];
          counter++;
          if (counter == pics[i].length) {
            counter = 0;
          }
        }, 1500);
        //console.log(targetDiv.src);
      }
    });
    divTarget[i].addEventListener("mouseout", (event) => {
      const targetDiv = event.target; //data type is a div
      //console.log(targetDiv);
      if (targetDiv.classList.contains("correct0") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct1") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct2") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct3") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct4") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
      if (targetDiv.classList.contains("correct5") == true) {
        clearInterval(someInterval);
        targetDiv.src = originalPics[i];
        //console.log(targetDiv.src);
      }
    }); 
  }  

  //class correct, 2.formula
  
  