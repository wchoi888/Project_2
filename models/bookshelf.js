document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.add-to-bookmark, .remove-from-bookmark');
  
    bookButtons.forEach(button => {
      button.addEventListener('click', handleBookmarkClick);
    });
  
    function handleBookmarkClick(event) {
      const bookId = event.target.dataset.bookid;
  
      fetch(`/api/books/${bookId}/bookmark`, {
        method: 'PUT',
      })
      .then(response => response.json())
      .then(updatedBook => {
        const button = event.target;
        if (updatedBook.isBookmarked) {
          button.textContent = 'Remove from Bookmark';
          button.classList.remove('add-to-bookmark');
          button.classList.add('remove-from-bookmark');
        } else {
          button.textContent = 'Add to Bookmark';
          button.classList.remove('remove-from-bookmark');
          button.classList.add('add-to-bookmark');
        }
      })
      .catch(error => console.error(error));
    }
  });
  