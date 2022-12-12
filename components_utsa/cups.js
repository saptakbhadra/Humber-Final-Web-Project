const feedbackForm=document.querySelector("#feedbackForm");
const feedbackHeader=document.querySelector("#feedbackHeader");
const submitFormButton=document.querySelector("#submitFormButton");
const alertDiv=document.querySelector("#alertDiv");


feedbackHeader.addEventListener("click",()=>{
    feedbackForm.classList.toggle("toggleShowHide")
});

submitFormButton.addEventListener("click",(event)=>{
    event.preventDefault()
    alertDiv.classList.toggle("toggleShowHide")
    setTimeout(() => {
        alertDiv.classList.toggle("toggleShowHide")
    }, 3000);
});


