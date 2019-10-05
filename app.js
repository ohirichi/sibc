const rightArrow = document.querySelector(".scroll-right");
const leftArrow = document.querySelector(".scroll-left");
const bookShelf = document.querySelector(".book-shelf");
const books = document.querySelector(".books");

window.onload = () => {
    addBooksToShelf();
    updateScrollArrowVisibility(books)
};


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



function addBooksToShelf(){
    const today = new Date();
    const month = today.getMonth();
    
    for(let i = 1; i <= month + 1; i++){
        const bookDate = new Date();
        bookDate.setMonth(i - 1);
        const monthName= Intl.DateTimeFormat('en-US', {month:"long"}).format(bookDate);
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const imgSrc= "assets/book"+ i + ".jpg";
        img.setAttribute("src", imgSrc )
        img.setAttribute("alt", "book " + i );
        const figCap = document.createElement("figcaption");
        const figText= document.createTextNode(monthName + " Book of the Month");
        figCap.append(figText);
        fig.append(img, figCap);
        books.insertBefore(fig, rightArrow)
    }

}

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