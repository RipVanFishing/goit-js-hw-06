const formRef = document.querySelector("#validation-input");
console.log(formRef);
const changeColor = formRef.classList;




const makeBlurInputStyle = () => {
    if (formRef.value.length === Number(formRef.dataset.length)) {
        changeColor.add("valid");
        changeColor.remove("invalid")
    }
    else {
        changeColor.add("invalid");
        changeColor.remove("valid");
    }
     
}

formRef.addEventListener("blur", makeBlurInputStyle)
  


