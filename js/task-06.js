const formRef = document.querySelector("#validation-input");
console.log(formRef);

const makeBlurInputStyle = (event) => {
    
    if (event.currentTarget.dataset.length === "6") {
       return event.currentTarget.classList.add("invalid");
        
    }
    event.currentTarget.dataset.length !== "6";
        event.currentTarget.classList.toggle("valid");
    
   
    return formRef;
   }

formRef.addEventListener("blur", makeBlurInputStyle)