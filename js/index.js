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
header.addEventListener('click', event => {
    
    event.target.style.color = "green";
    event.target.style.background = "black";
});


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

const paragraphs = document.querySelectorAll("p");

Array.from(paragraphs).forEach(content => {
    content.addEventListener('copy', event => {
        event.target.style.fontWeight = "bold";
    })
})


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

document.addEventListener('keydown', event => {
    if(event.key === 'p') {
        header.style.background = "aqua";
    }
});


//stopPropagation

const btn = document.querySelector(".btn");
const dest = document.querySelector(".destination");

btn.addEventListener('click', event => {
    alert("button was clicked");
    event.stopPropagation();
});

dest.addEventListener('click', event => {
    alert("box was clicked");
});


//Prevent nav items from refreshing page
Array.from(document.links).forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
});
