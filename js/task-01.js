const categoriesEl = document.querySelectorAll( ".item");
const titleEl = document.querySelectorAll("h2");

console.log(`Numbers of categories:${categoriesEl.length}`);



titleEl.forEach((name, idx) => {
    console.log(`Category: ${name.textContent}`)
    const elementsLength = document.querySelectorAll(".item > ul")
    console.log(`Elements: ${elementsLength[idx].children.length}`)
})











