let accordionItems = document.querySelectorAll(".accordion-item");

accordionItems?.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        let target = event.currentTarget;
        let accordionItemContent = target.querySelector(".accordion-content")
        let accordionItemTitle = target.querySelector(".accordion-title")

        if (accordionItemTitle.classList.contains('active')) {
            accordionItemContent.style.height = '0px';
            accordionItemTitle.classList.remove('active');
        } else {
            closeAccordionItems()
            accordionItemContent.style.height = accordionItemContent.scrollHeight + 'px';
            accordionItemTitle.classList.add("active")
        }
    });
});

function closeAccordionItems() {
    accordionItems?.forEach(item => {
        item.querySelector(".accordion-content").style.height = '0px';
        item.querySelector(".accordion-title").classList.remove('active');
    })
}