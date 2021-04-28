/********* Various Event Listeners *******/

const clearBtn = document.querySelector('.clear-post');

// clearBtn.addEventListener('dblclick', function(event) {
//     console.log('Hello!');
// });

// clearBtn.addEventListener('mousedown', function(event) {
//     console.log('Hello!');
// });

// clearBtn.addEventListener('mouseup', function(event) {
//     console.log('Hello!');
// });

// clearBtn.addEventListener('mouseenter', function(event) {
//     console.log('Hello!');
// });

// clearBtn.addEventListener('mouseleave', function(event) {
//     console.log('Hello!');
// });

// clearBtn.addEventListener('mousemove', function(event) {
//     console.log('Hello!');
// });

/********* Observing Event Object *******/

clearBtn.addEventListener('click', (event) => {
    // console.log(event);

    // console.log(event.clientX);
    // console.log(event.clientY);
    // console.log(event.offsetX);

    // console.log(event.altKey);
    // console.log(event.shiftKey);
    // console.log(event.ctrlKey);

    console.log(event.type);

    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerText);

    event.target.style.background = "#000";
});