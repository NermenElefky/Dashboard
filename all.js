let list_elements = document.querySelectorAll(".links ul li");

list_elements.forEach(function(e){
    
    e.addEventListener("click",function(){
        console.log(e.innerHTML);
    })
})