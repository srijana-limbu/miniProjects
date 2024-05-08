const picture = document.querySelectorAll(".container")

picture.forEach(picture => {
    const heartIcon = picture.querySelector(".heart");

    picture.addEventListener("dblclick", (e) => {
        let xValue = e.clientX - picture.offsetLeft;
        let yValue = e.clientY - picture.offsetTop;

        heartIcon.style.left = `${xValue}px`;
        heartIcon.style.top = `${yValue}px`;

        heartIcon.classList.add("active");

        setTimeout(() => {
            heartIcon.classList.remove("active"); 
        }, 1000);
    });
});