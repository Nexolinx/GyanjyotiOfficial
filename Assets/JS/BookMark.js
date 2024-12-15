
function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarksList = document.getElementById('bookmarks-list');
    bookmarksList.innerHTML = ''; 

    if (bookmarks.length === 0) {
  
        bookmarksList.innerHTML = '<pid="NoBook">No Bookmarks</p>';
    } else {
        bookmarks.forEach(book => {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
                <div class="ronaldo">
                    <img src="${book.image}" alt="${book.title}">
                </div>
                <h4>${book.title}</h4>
                <div class="info">
                    <div class="pdf-count"><i class="fa-solid fa-file-pdf"></i> ${book.pdfs}</div>
                    <div class="upload-time"><i class="fa-regular fa-clock"></i> ${book.time}</div>
                </div>
                <div class="explore">
                    <button>Explore</button>  
                    <i class="fa-solid fa-bookmark favorite-icon active" onclick="toggleBookmark('${book.title}', '${book.image}', '${book.pdfs}', '${book.time}', this)"></i>
                </div>
            `;
            bookmarksList.appendChild(box);
        });
    }
}


function toggleBookmark(bookTitle, bookImg, bookPdfs, bookTime, icon) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(book => book.title === bookTitle);

    if (isBookmarked) {
  
        bookmarks = bookmarks.filter(book => book.title !== bookTitle);
        icon.classList.remove('active');
        icon.classList.add('inactive');
        showPopup('Bookmark removed');
    } else {
   
        const bookData = { title: bookTitle, image: bookImg, pdfs: bookPdfs, time: bookTime };
        bookmarks.push(bookData);
        icon.classList.remove('inactive');
        icon.classList.add('active');
        showPopup('Bookmark added');
    }

  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  
    loadBookmarks();
}


function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerText = message;
    popup.classList.add('active');
    setTimeout(() => {
        popup.classList.remove('active');
    }, 2000);
}


document.addEventListener('DOMContentLoaded', loadBookmarks);








function toggleFavorite(icon) {
    const bookBox = icon.closest('.box');
    const bookTitle = bookBox.dataset.bookTitle;
    const bookImg = bookBox.dataset.bookImg;
    const bookPdfs = bookBox.querySelector('.pdf-count').innerText;
    const bookTime = bookBox.querySelector('.upload-time').innerText;

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    if (icon.classList.contains('fa-regular')) {
      
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        bookmarks.push({ title: bookTitle, image: bookImg, pdfs: bookPdfs, time: bookTime });
        showPopup('Bookmark added');
    } else {
   
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        bookmarks = bookmarks.filter(book => book.title !== bookTitle);
        showPopup('Bookmark removed');
    }

   
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  
    updateBookmarkCount();
 
    displayBookmarks();
}


function updateBookmarkCount() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    document.getElementById('bookmark-count').textContent = bookmarks.length; 
}


document.addEventListener('DOMContentLoaded', () => {
    updateBookmarkCount();
    displayBookmarks();
});