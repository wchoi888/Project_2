// Function to handle the form submission for adding books
const addbooksformhandler = async (event) => {
  event.preventDefault();
  // Get input values from the form
  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const genre = document.querySelector("#genre").value.trim();
  const description = document.querySelector("#description").value.trim();
  const publishedYear = document.querySelector("#publishedYear").value.trim();
  const isbn = document.querySelector("#isbn").value.trim();
  //Check if all required fields are provided
  if (author && title && genre && description && publishedYear && isbn) {
    const response = await fetch("/API/book", {
      method: "POST",
      body: JSON.stringify({
        author,
        title,
        genre,
        description,
        publishedYear,
        isbn,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response);
      alert("Failed to add book.");
    }
  }
};
// Function to handle the form submission for deleting an existing book
const deleteFormHandler = async (event) => {
  event.preventDefault();
  // Get the blogpost ID from the form
  const bookId = event.target.dataset.bookid;
  //// Check if the book ID is provided
  if (bookId) {
    const response = await fetch(`/API/book/${bookId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response);
      alert("Failed to delete book.");
    }
  }
};
// Event listeners: Attach event handlers to buttons

const submitBtn = document.querySelector("#submit-btn");
const deleteBtn = document.querySelectorAll(".delete-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", addbooksformhandler);
}

if (deleteBtn) {
  deleteBtn.forEach((item) => {
    item.addEventListener("click", deleteFormHandler);
  });
}
