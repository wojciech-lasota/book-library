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
                    ? `<i onclick="changeBookStatus(${id})" class="bi bi-toggle-on"></i>`
                    : `<i onclick="changeBookStatus(${id})" class="bi bi-toggle-off"></i>`
                }
                <i onclick="deleteBook(${id})" class="bi bi-trash"></i>
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
    localStorage.setItem("bookList", JSON.stringify(bookListLocalStorage));
    generateBookList();
  }
};
const changeBookStatus = (bookToChangeStatus) => {
  const findBookIndex = bookListLocalStorage.findIndex(
    (book) => book.id === bookToChangeStatus
  );
  if (findBookIndex === undefined) return;
  const newBookStatus = bookListLocalStorage[findBookIndex];
  newBookStatus.haveRead = newBookStatus.haveRead == true ? false : true;
  bookListLocalStorage[findBookIndex] = newBookStatus;
  //   console.log(bookToChangeStatus);
  //   console.log(newBookStatus);
  generateBookList();
  localStorage.setItem("bookList", JSON.stringify(bookListLocalStorage));
};
const deleteBook = (id) => {
  const search = bookListLocalStorage.filter((book) => book.id !== id);
  if (search === undefined) return;
  bookListLocalStorage = [...search];
  console.log(id);
  localStorage.setItem("bookList", JSON.stringify(bookListLocalStorage));
  generateBookList();
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
