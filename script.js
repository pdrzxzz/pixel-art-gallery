function darkmode() {
    let element = document.body;
    element.classList.toggle("dark");
    for (i = 0; i < document.getElementsByClassName("img-description-wrapper").length; i++) {
    element = document.getElementsByClassName("img-description-wrapper")[i]
    element.classList.toggle("dark")
    }
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type.toggle = 'image/x-icon';
    link.rel.toggle = 'icon';
    link.href.toggle = './dark-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}
