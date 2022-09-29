var images = document.querySelectorAll('img');

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var img = entry.target;
            img.setAttribute('src', img.getAttribute('data-src'));
            observer.unobserve(entry.target);
        }
    });
}, {});

images.forEach(img => {
    observer.observe(img);
})