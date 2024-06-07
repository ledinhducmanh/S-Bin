let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        toggleContent(i);
    });
}

function toggleContent(index) {
    const currentContent = contentDiv[index];
    const currentToggle = toggles[index];
    const currentIcon = icons[index];
    const isExpanded = parseInt(currentContent.style.height) !== currentContent.scrollHeight;

    // Đóng tất cả các nội dung trừ nội dung hiện tại
    for (let j = 0; j < contentDiv.length; j++) {
        if (j !== index) {
            contentDiv[j].style.height = "0px";
            toggles[j].style.color = "var(--black-color)";
            icons[j].classList.remove('fa-minus');
            icons[j].classList.add('fa-plus');
        }
    }

    // Mở hoặc đóng nội dung hiện tại
    if (isExpanded) {
        currentContent.style.height = currentContent.scrollHeight + "px";
        currentToggle.style.color = "var(--dark-green)";
        currentIcon.classList.remove('fa-plus');
        currentIcon.classList.add('fa-minus');
    } else {
        currentContent.style.height = "0px";
        currentToggle.style.color = "var(--black-color)";
        currentIcon.classList.remove('fa-minus');
        currentIcon.classList.add('fa-plus');
    }
}
