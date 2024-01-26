document.addEventListener("DOMContentLoaded", () => {
  const bookButtons = document.querySelectorAll(
    ".add-to-bookmark, .remove-from-bookmark"
  );

  const handleBookmarkClick = async (event) => {
    const bookId = event.target.dataset.bookid;
    const book = await fetch(`/API/book/${bookId}`, { method: "GET" });
    const bookMarked = book.isBookMarked;
    let updatedBookmark;
    if (bookMarked == true) {
      updatedBookmark = false;
    } else {
      updatedBookmark = true;
    }
    fetch(`/API/book/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({ updatedBookmark }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((updatedBook) => {
        const button = event.target;
        if (updatedBook.isBookmarked) {
          button.textContent = "Remove from Bookmark";
          button.classList.remove("add-to-bookmark");
          button.classList.add("remove-from-bookmark");
        } else {
          button.textContent = "Add to Bookmark";
          button.classList.remove("remove-from-bookmark");
          button.classList.add("add-to-bookmark");
        }
      })
      .catch((error) => console.error(error));
  };
  bookButtons.forEach((button) => {
    button.addEventListener("click", handleBookmarkClick);
  });
});
