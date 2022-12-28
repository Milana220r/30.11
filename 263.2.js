let elem = document.querySelector(`#elem`);
console.log(elem.classList.length);
 
for (let el of elem.classList) {
     console.log(el);
}