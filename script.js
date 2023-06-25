function darkmode() {
    let element = document.body;
    element.classList.toggle("dark");
    for (i = 0; i < document.getElementsByClassName("img-description-wrapper").length; i++) {
    element = document.getElementsByClassName("img-description-wrapper")[i]
    element.classList.toggle("dark")
    }
}