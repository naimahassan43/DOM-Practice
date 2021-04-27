/********* DOM Selectors(For Single Element) *******/

// let headers = document.getElementsByClassName('header');
// let headers = document.getElementsByTagName('h1');
let headers = document.querySelectorAll('h1');


// headers = Array.from(headers);

headers.forEach((header) => {
    console.log(header.className);
    header.style.color = '#f2f2f2';
    header.style.background = '#000';

    header.style.padding = '15px';

    header.innerText = `Hello Everyone`;
});
console.log(headers);
/********* DOM Selectors(For Multiple Element) *******/