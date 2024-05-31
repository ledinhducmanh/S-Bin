// Radio Check and Search Input handle
var searchInput = document.getElementById("filter__search");

searchInput.addEventListener('keydown',(e) => {
    if(e.key == 'Enter') {
        filterSearch(searchInput.value)
    }
})

var filterSearch = (valueInputCheck) => {
    var filter = valueInputCheck ? valueInputCheck.trim().toUpperCase() : searchInput.value.trim().toUpperCase();
    var voucherItems = document.querySelectorAll(".voucher__item");
    
    for (var i = 0; i < voucherItems.length; i++) {
        var voucherNameElement = voucherItems[i].querySelector(".voucher__name");
        var voucherPriceElement = voucherItems[i].querySelector(".voucher__price");

        var txtValue = voucherNameElement ? (voucherNameElement.textContent || voucherNameElement.innerText) : "";
        var priceValue = voucherPriceElement ? (voucherPriceElement.textContent || voucherPriceElement.innerText) : "";

        if (txtValue.toUpperCase().indexOf(filter) > -1 || priceValue.indexOf(filter) > -1) {
            voucherItems[i].parentElement.style.display = "block"; // Đảm bảo rằng phần tử hiển thị trên dòng mới
        } else {
            voucherItems[i].parentElement.style.display = "none";
        }
    }
};
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

// Handle my voucher

const myVoucherBtnList = document.querySelectorAll('.js-MyVoucher')
const myVoucherModal = document.querySelector('.js-ModalMyVoucher')
const myVoucherCloseBtnList = document.querySelectorAll('.js-CloseModalMyVoucher')

myVoucherBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        myVoucherModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

myVoucherCloseBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        myVoucherModal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});
