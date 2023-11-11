// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerButton = window.innerHeight / 4 * 8
//     const currentScrollTop = window.scrollY;
// console.log(triggerButton);
//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top
//         if(boxTop < triggerButton) {
//             box.classList.add('show')
//         } else{
//             box.classList.remove('show')
//         }
//     })
// }
// let scrollTimeout;

// window.addEventListener('scroll', function() {
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(checkBoxes, 50); // Adjust the debounce timeout as needed
// });