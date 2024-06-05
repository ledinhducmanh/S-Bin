// Unset .html
// window.history.pushState({}, document.title, window.location.pathname.replace('.html', ''));

// Handle title change
var titles = [
    "This is the S-Bin website!",
    "Welcome to our website!",
    "Check out our latest offers!",
    "Don't miss our coupons!",
    "Scan QR to get more coin!",
    "Contact us for more info!",
    "Follow us via fb fanpage!",
];
let currentTitleIndex = 0;

var updateTitle = () => {
    document.title = titles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}

setInterval(updateTitle, 5000);

// Handle preload
const preLoadingPage = document.getElementById('preload')
window.addEventListener('load', () => {
    preLoadingPage.style.opacity = 0;
    preLoadingPage.style.visibility = 'hidden';
});