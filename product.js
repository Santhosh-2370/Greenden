let sidenav=document.getElementById("sidenav")
let menuicon=document.getElementById("menuicon")
let closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0";
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

let productcontainer=document.getElementById("product-container")

let Search = document.getElementById("Search");

let productlist = productcontainer.querySelectorAll("div");

Search.addEventListener("keyup", function(event){
    let enteredvalue = event.target.value.toUpperCase();

    for (count = 0; count< productlist.length; count=count+1){

        let productname=productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) === -1) {
            productlist[count].style.display = "none";
        } 
        else {
            productlist[count].style.display = "block";
        }
    }
});
