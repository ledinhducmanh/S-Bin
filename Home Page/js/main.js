// OPP
const app = {
    titlePageChange() {
        // Handle title page change
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
    },
    preLoader() {
        // Handle preload
        const preLoadingPage = document.getElementById('preload')
        window.addEventListener('load', () => {
            preLoadingPage.style.opacity = 0;
            preLoadingPage.style.visibility = 'hidden';
            setTimeout(() => {
                preLoadingPage.remove()
            }, 1000)
        });

    },
    blinkUserImg() {
        const userImg = document.querySelector('.user__profile');

        if (userImg) {
            let isVisible = false;

            userImg.onclick = () => {
                const showMore = userImg.querySelector('.user__show-more');
                if (showMore) {
                    if (isVisible) {
                        showMore.style.visibility = 'hidden';
                        showMore.style.transform = 'scale(0)';
                        showMore.style.opacity = '0';
                    } else {
                        showMore.style.visibility = 'visible';
                        showMore.style.transform = 'scale(1)';
                        showMore.style.opacity = '1';
                    }
                    isVisible = !isVisible;  // Toggle the state
                } else {
                    console.log('Show more element not found');
                }
            };
        } else {
            console.log('User profile image not found');
        }

    },
    onrender() {
        const xhttp = new XMLHttpRequest()
        const api = 'https://lemanh-api.onrender.com/sbin-support'

        xhttp.open("GET", `${api}`, true);
        xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText)
                const html = response.map((supportSbin) => {
                    return `
                        <div class="wrapper">
                        <button class="toggle">
                            ${supportSbin.question}
                            <i class="fas fa-plus icon"></i>
                        </button>
                        <div class="content">
                            <p>${supportSbin.answer}</p>
                            <img src="${supportSbin.image}" alt="${supportSbin.alt}" class="image">
                        </div>
                    </div>
                    `
                })

                var faq = document.getElementById('faq')

                console.log(html.join(' '))
                faq.innerHTML = html.join('')
           }
        };
    },
    start() {
        this.titlePageChange()
        this.preLoader()
        this.blinkUserImg()
        // this.onrender()
    }
}
app.start()


const popupBtnList = document.querySelectorAll('.js-popup')
const popupModal = document.querySelector('.js-Modalpopup')
const popupCloseBtnList = document.querySelectorAll('.js-CloseModalpopup')

popupBtnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        popupModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
})

popupCloseBtnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        popupModal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});
