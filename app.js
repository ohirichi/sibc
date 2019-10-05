const rightArrow = document.querySelector(".scroll-right");
const leftArrow = document.querySelector(".scroll-left");
const bookShelf = document.querySelector(".book-shelf");
const books = document.querySelector(".books");

window.onload = () => updateScrollArrowVisibility(books);


rightArrow.addEventListener("click", ()=>{
    books.scrollLeft += 300;
    updateScrollArrowVisibility(books);
})

leftArrow.addEventListener("click", ()=>{
    books.scrollLeft -= 300;
    updateScrollArrowVisibility(books);
})

books.addEventListener("scroll", () => {
    updateScrollArrowVisibility(books);
})



function getScrollDirection(container) {
    const clientWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    let scroll = "none";
    if (scrollWidth> clientWidth){
        const scrollLeft = container.scrollLeft;
        const scrollRight = container.scrollRight;

        if (scrollLeft > 0  && (scrollWidth - scrollLeft) - clientWidth < 20){
            return "left"
        }

        else if((scrollWidth - scrollLeft) - clientWidth > 10  && scrollLeft == 0){
            return "right"
        }
        else return "both";
    }

    return scroll;
}

function updateScrollArrowVisibility (container){
    const direction = getScrollDirection(container);
    if (direction == "none"){
        rightArrow.classList.add("hidden");
        leftArrow.classList.add("hidden");
    }
    else if (direction == "left") rightArrow.classList.add("hidden");
    else if (direction == "right") leftArrow.classList.add("hidden");
    else {
        rightArrow.classList.remove("hidden");
        leftArrow.classList.remove("hidden");
    }
}