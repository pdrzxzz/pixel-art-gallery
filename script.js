function darkmode() {
    let element = document.body;
    element.classList.toggle("dark");
    for (i = 0; i < document.getElementsByClassName("img-description-wrapper").length; i++) {
    element = document.getElementsByClassName("img-description-wrapper")[i]
    element.classList.toggle("dark")
    }
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'icon';
    link.rel = 'icon';
    link.href = './dark-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}
