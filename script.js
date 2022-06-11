const bookShelf = document.getElementById("bookShelf");
const btnAdd = document.querySelector(".btn-add");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookStatus = document.querySelector("#book_status");

let bookListLocalStorage = JSON.parse(localStorage.getItem("bookList")) || [];

const generateBookList = () => {
  return (bookShelf.innerHTML = bookListLocalStorage
    .map(({ id, title, author, pages, haveRead }) => {
      return `
        
            <div id=book-id-${id} class="book">
                <h2>${title}</h2>
                <h3>${author}</h3>
                <p>${pages} pages</p>
                <p>have you read${
                  haveRead
                    ? `<i class="bi bi-check"></i>`
                    : `<i class="bi bi-x"></i>`
                }</p>
                ${
                  haveRead
                    ? `<i onclick="changeBookStatus()" class="bi bi-toggle-on"></i>`
                    : `<i onclick="changeBookStatus()" class="bi bi-toggle-off"></i>`
                }
            </div>
        
        `;
    })
    .join(""));
};
generateBookList();
// btnAdd.addEventListener("click", () => {});
const changeStatus = () => {};
const addBook = () => {
  if (
    title.value.length == 0 ||
    author.value.length == 0 ||
    pages.value.length == 0
  ) {
    alert("fill the missing");
  } else {
    bookListLocalStorage.push({
      id: Math.floor(Math.random() * 1000),
      title: title.value,
      author: author.value,
      pages: pages.value,
      haveRead: bookStatus.checked,
    });
    title.value = "";
    author.value = "";
    pages.value = "";
    bookStatus.checked = false;
    localStorage.setItem("bookList", JSON.stringify(bookList));
    generateBookList();
  }
};

// const addBookBtn = document.querySelector(".btn-add");
// const fadeElems = document.querySelectorAll(".has-fade");
// const header = document.querySelector(".header");

// addBookBtn.addEventListener("click", () => {
//   if (header.classList.contains("open")) {
//     header.classList.remove("open");
//     fadeElems.forEach((element) => {
//       element.classList.remove("fade-in");
//       element.classList.add("fade-out");
//     });
//   } else {
//     header.classList.add("open");
//     fadeElems.forEach((element) => {
//       element.classList.remove("fade-out");
//       element.classList.add("fade-in");
//     });
//   }
// });
