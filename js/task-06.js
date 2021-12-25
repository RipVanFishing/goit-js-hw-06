const formRef = document.querySelector("#validation-input");
console.log(formRef);

const makeBlurInputStyle = () => {
    if (formRef.dataset.length !== "6") {
        formRef.classList.add("invalid");
        
    }
    else if (formRef.dataset.length === "6") {
        formRef.classList.add("valid");
    }
   
    return formRef
   }

formRef.addEventListener("blur", makeBlurInputStyle )