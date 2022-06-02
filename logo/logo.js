let logo = document.querySelector(".logo > img");
let heightConstant = logo.getBoundingClientRect().height;
let widthConstant = logo.getBoundingClientRect().width;
let heightVariant = heightConstant;
let widthVariant = widthConstant;

window.addEventListener("scroll", () => {
    --heightVariant;
    //console.log(logo.style);
    logo.style.height = heightVariant + "px";
    //logo.style.transform = `scale(${5},${5})}`;
})

/* console.log(logo); */