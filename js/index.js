// // Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

const header = document.querySelector("header");
const navLinks = header.querySelectorAll(".nav-link");
const  img = document.querySelectorAll("img");
const intro = document.querySelector(".intro")


// Type 1
Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.fontSize = "1rem";

        // reset the size
        setTimeout(function() {
            event.target.style.fontSize = "";
          }, 500);

    }, false);    
});

// Type 2
header.querySelector("h1").addEventListener('click', event => {
    header.querySelector("h1").style.color = "green";
    header.querySelector("h1").style.background = "black";
});

// header.querySelector("h1").addEventListener('dbclick', event => {
//     header.querySelector("h1").style.color = "black";
//     header.querySelector("h1").style.background = "white";
// });


// Type 3
Array.from(img).forEach(image => {
    image.addEventListener('mouseenter', event => {
        event.target.style.borderRadius = "50%";
    });
});

// Type 4
Array.from(img).forEach(image => {
    image.addEventListener('mouseleave', event => {
        event.target.style.borderRadius = "10px";
    });
});

// Type 5

Array.from(navLinks).forEach(link => {
    link.addEventListener('focusin', event => {
        event.target.style.border = "1px solid black"; 
});
});

// Type 6

Array.from(navLinks).forEach(link => {
    link.addEventListener('focusout', event => {
        event.target.style.border = ""; 
});
});

// Type 7

header.addEventListener('keydown', event => {
    if(event.key === 'p') {
        header.style.background = "aqua";
    }
});

// Type 8
const h2 = document.querySelectorAll(".container h2");

window.addEventListener('resize', event => {
     intro.style.color = "blue";
});



//Type 9
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach( button => {
    button.addEventListener('dblclick', event => {
        event.target.style.borderColor = "black";
    });
});


//Type 10

const paragraphs = document.querySelectorAll("p");

Array.from(paragraphs).forEach(content => {
    content.addEventListener('copy', event => {
        event.target.style.fontWeight = "bold";
    })
})


