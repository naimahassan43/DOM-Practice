/********* DOM Selectors(For Single Element) *******/

// let headers = document.getElementsByClassName('header');
// let headers = document.getElementsByTagName('h1');
// let headers = document.querySelectorAll('h1');


// headers = Array.from(headers);

// headers.forEach((header) => {
//     console.log(header.className);
//     header.style.color = '#f2f2f2';
//     header.style.background = '#000';

//     header.style.padding = '15px';

//     header.innerText = `Hello Everyone`;
// });
// console.log(headers);

/********* DOM Selectors(For Multiple Element) *******/

// let header = document.getElementById('add-post-title-id');

// console.log(header);
// console.log(header.id);
// console.log(header.classList);

// header.style.background = "#000";
// header.style.color = "#fff";
// header.style.padding = "15px";
// header.style.display = "none";

// header.textContent = "Hello World";
// header.innerText = "Hello World2";
// header.innerHTML = `<span style="
// color: red ">Hello!</span>`;

// let header = document.querySelector('#add-post-title-id');
let header = document.querySelector('h1');

header.style.background = "#000";
header.style.color = "#fff";
header.style.padding = "15px";

header.textContent = "Hello World";