function darkmode() {
    let element = document.body;
    element.classList.toggle("dark");
    for (i = 0; i < document.getElementsByClassName("img-description-wrapper").length; i++) {
    wrapperelement = document.getElementsByClassName("img-description-wrapper")[i]
    wrapperelement.classList.toggle("dark")
    }
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    if (element.classList.contains('dark')) {
    link.href = './bright-icon.png';
    }
    else {
    link.href = './dark-icon.png';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}
