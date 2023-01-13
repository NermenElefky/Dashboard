let button_changing_icon = document.getElementsByClassName("btn")[0];
console.log(button_changing_icon); 


button_changing_icon.addEventListener("click",()=>{
    // the icon is stored in a var called changing _icon
    changing_icon.classList.toggle("fa-circle-check");
    changing_icon.classList.toggle("fa-circle-xmark");

    // change the margin

    if (changing_icon.style.transform === "translateX(132%)"){
        changing_icon.style.transform = "translateX(0%)";
    }
    else {
        changing_icon.style.transform = "translateX(132%)";
    }

    // change the background-color
    if (button_changing_icon.style.backgroundColor === "dodgerblue") {
        button_changing_icon.style.backgroundColor = "#80808066";   
    }
    else {
        button_changing_icon.style.backgroundColor = "dodgerblue"
    }
    // make a transition time
    changing_icon.style.transition = "all .5s";
})




{/* <i class="fa-solid fa-circle-xmark"></i>
i class="fa-solid fa-circle-check" */}




// start again
let button_changing_icon2 = document.getElementsByClassName("btn")[1];
console.log(button_changing_icon); 


button_changing_icon2.addEventListener("click",()=>{
    // the icon is stored in a var called changing _icon
    changing_icon2.classList.toggle("fa-circle-check");
    changing_icon2.classList.toggle("fa-circle-xmark");

    // change the margin

    if (changing_icon2.style.transform === "translateX(132%)"){
        changing_icon2.style.transform = "translateX(0%)";
    }
    else {
        changing_icon2.style.transform = "translateX(132%)";
    }

    // change the background-color
    if (button_changing_icon2.style.backgroundColor === "dodgerblue") {
        button_changing_icon2.style.backgroundColor = "#80808066";   
    }
    else {
        button_changing_icon2.style.backgroundColor = "dodgerblue"
    }
    // make a transition time
    changing_icon2.style.transition = "all .5s";
})
