function darkmode() {
    let element = document.body;
    element.classList.toggle("dark");
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    if (element.classList.contains('dark')) {
    link.href = './icons/dark-icon.png';
    }
    else {
    link.href = './icons/bright-icon.png';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}
