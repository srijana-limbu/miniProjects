const image = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {
    //calculate the x and y position of the double click event
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;
    console.log(xValue, yValue);

    //set position of the heart element using x and y values
    heartIcon.style.left = `${xValue}px`;
    heartIcon.style.top = `${yValue}px`;

    heartIcon.classList.add("active");

    //remove active class after 1s
    setTimeout(() => {
    heartIcon.classList.remove("active");
    }, 1000);
});

