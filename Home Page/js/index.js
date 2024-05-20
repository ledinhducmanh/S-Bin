// Radio Check and Search Input handle
var filterSearch = (valueInputCheck) => {
    var searchInput = document.getElementById("filter__search");
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
const titles = [
    "This is the S-Bin website!",
    "Welcome to our website!",
    "Check out our latest offers!",
    "Don't miss our coupons!",
    "Scan QR to get more coin!",
    "Contact us for more info!",
    "Follow us via fb fanpage!",
];
let currentIndex = 0;

function updateTitle() {
    document.title = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(updateTitle, 3000);