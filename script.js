let side = document.querySelector("#sidebar");
let content = document.querySelectorAll(".content");
let close = document.querySelector("#close");
let open = document.querySelector("#open");

let showSidebar=()=>{
side.style.display = "flex";
content.forEach(cont => {
  cont.style.display='none';
})
}
let hideSidebar=()=>{
    side.style.display = "none";
}

open.addEventListener("click", showSidebar);
close.addEventListener("click", hideSidebar);
