/********* Observing Parent, Children, Sibling Properties *******/

const tbody = document.querySelector('tbody');

console.log(tbody);
console.log(tbody.children);
// console.log(tbody.childNodes);
console.log(tbody.childElementCount);
console.log(tbody.children[2]);

// tbody.children[2].innerHTML = '<span>Hello!</span>';

console.log(tbody.firstChild);
console.log(tbody.firstElementChild);
console.log(tbody.firstElementChild.children[1]);
console.log(tbody.firstElementChild.children[1].children[0]);

console.log(tbody.parentElement);
console.log(tbody.parentElement.parentElement);
// console.log(tbody.parentNode);

// console.log(tbody.children[1].previousSibling);
console.log(tbody.children[1].previousElementSibling);
// console.log(tbody.children[1].nextSibling);
console.log(tbody.children[1].nextElementSibling);