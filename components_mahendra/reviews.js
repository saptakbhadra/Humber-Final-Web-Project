'use strict';
$(document).ready(() => {

        $("#forminfo").hide();
        $("#postbut").click(function(){
          $("#forminfo").toggle();
        });

        $("#formclose").click(function(){
            $("#forminfo").hide();
        });
  
  $('.cardimg img').each((index, img) => {
    const oldURL = img.src;
    const newURL = img.id;
    console.log('old', oldURL);
    $(img).hover(
      () => (img.src = newURL),
      () => (img.src = oldURL) 
    );
  });

    $("#buttonstyle").click( () => {
        const email = $("#namep").val();
        const place = $("#place").val();
        const comment = $("#comments").val();
        const rate = $("#rating").val();
        let isValid = true;

        if (email === "") {
            document.querySelector('.status1').style.color = 'red';
            $("#namep").next().next().text("This field is required.");
            isValid = false;
        } else {
            $("#namep").next().next().text("");
        } 

        if (place === "") { 
            document.querySelector('.status2').style.color = 'red';
            $("#place").next().next().text("This field is required.");
            isValid = false;
        } else {
            $("#place").next().next().text("");
        }
        
        if (comment === "") { 
            document.querySelector('.status3').style.color = 'red';
            $("#comments").next().next().text("This field is required.");
            isValid = false;
        } else {
            $("#comments").next().next().text("");
        }
       
        if (isValid) {
            $("#reviewform").submit();
        }
        if (isValid) {
            $("#namep").val("");
            $("#place").val("");
            $("#comments").val("");
            $("#rating").val("");
            $("#fileup").val("");
            alert('Thanks for your review !');
            $("#reviewform").submit();
            
        }
    });

    $("#namep").focus();

    
});

let slideNum=1;
    show(slideNum);
    function nextSlide(n) {
    show(slideNum += n);
    }
    function present(n) {
    show(slideNum = n);
    }
    function show(n) {
    let i;
    let nSlide = document.getElementsByClassName("sliderev");
    let tSlide = document.getElementsByClassName("dot");
    if (n > nSlide.length) {slideNum = 1}    
    if (n < 1) {slideNum = nSlide.length}
    for (i = 0; i < nSlide.length; i++) {
        nSlide[i].style.display = "none";  
    }
    for (i = 0; i < tSlide.length; i++) {
        tSlide[i].className = tSlide[i].className.replace(" active", "");
    }
    nSlide[slideNum-1].style.display = "flex";  
    tSlide[slideNum-1].className += " active";
    }