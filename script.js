function darkmode() {
    let body = document.body;
    body.classList.toggle("dark");
    let link = document.querySelector("link[rel*='icon']")
    if (body.classList.contains('dark')) {
    link.href = './icons/dark-icon.png';
    }
    else {
    link.href = './icons/bright-icon.png';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}
