document.getElementById('languageSelect').addEventListener('change', function() {
    var selectedLanguage = this.value;
    
 
    var translateElement = document.querySelector('.goog-te-combo');
    if (translateElement) {
        translateElement.value = selectedLanguage; 
        translateElement.dispatchEvent(new Event('change')); 
    }
});



function toggleFavorite(icon) {
    const bookBox = icon.closest('.box');
    const bookTitle = bookBox.dataset.bookTitle;
    const bookImg = bookBox.dataset.bookImg;
    const bookPdfs = bookBox.querySelector('.pdf-count').innerText;
    const bookTime = bookBox.querySelector('.upload-time').innerText;

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

   
    const isBookmarked = bookmarks.some(book => book.title === bookTitle);

    if (icon.classList.contains('fa-regular')) {
     
        if (!isBookmarked) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            bookmarks.push({ title: bookTitle, image: bookImg, pdfs: bookPdfs, time: bookTime });
            showPopup('Bookmark added');
        } else {
            showPopup('This book is already bookmarked'); 
        }
    } else {
 
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        bookmarks = bookmarks.filter(book => book.title !== bookTitle);
        showPopup('Bookmark removed');
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkCount();
}

function updateBookmarkCount() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    document.getElementById('bookmark-count').textContent = bookmarks.length;
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerText = message;
    popup.classList.add('active');

    setTimeout(() => {
        popup.classList.remove('active');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', updateBookmarkCount);
