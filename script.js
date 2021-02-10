// const icons = document.querySelectorAll(".section-1-icons i");

// let adding = 1;
// let subtracting = 0;

// setInterval(addingClass, 1000);

// function addingClass() {
//   if (adding >= icons.length) {
//     icons[0].classList.add("change");
//     icons[icons.length - 1].classList.remove("change");

//     adding = 1;
//     subtracting = 0;
//   } else {
//     icons[adding].classList.add("change");

//     icons[subtracting].classList.remove("change");

//     subtracting++;
//     adding++;
//   }
// }
document.querySelector(".menue").addEventListener("click", () =>{
document.querySelectorAll(".target").forEach((item) =>{
    item.classList.toggle("change")
})
})


const icons = document.querySelectorAll(".section-1-icons i");
let i = 1
setInterval(() => {
    i++
    const icon = document.querySelector(".section-1-icons .change")

    icon.classList.remove("change")
    if (i > icons.length) {
        i = 1;
        icons[0].classList.add("change")
    } else { icon.nextElementSibling.classList.add("change") }

}, 2000)
