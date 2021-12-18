const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
 outputRef.textContent = event.target.value;
})