const categoriesEl = document.querySelectorAll( ".item");
const titleEl = document.querySelectorAll("h2");








function counNumberElem() {
    console.log("Numbers of categories:", categoriesEl.length);
   
categoriesEl.forEach(elem => {
      const numberLi = elem.querySelectorAll("li")
      titleEl.forEach(item => {
         console.log("Category:", item.textContent);
      })
    console.log("Elements:", numberLi.length);
})
    
}

counNumberElem();








