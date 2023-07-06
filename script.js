function darkmode() {
    //update body
    let body = document.body;
    body.classList.toggle("dark");
    //update icon
    let link = document.querySelector("link[rel*='icon']")
    if (body.classList.contains('dark')) {
    link.href = './icons/dark-icon.png';
    }
    else {
    link.href = './icons/bright-icon.png';
    }
}
