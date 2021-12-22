const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
    if (event.target.value === "") {
      return  outputRef.textContent = "Anonymous";
    }

 outputRef.textContent = event.target.value;
})


