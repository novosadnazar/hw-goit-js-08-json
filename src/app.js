const input = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let urlList = [];

const render = function () {
  listRef.innerHTML = urlList
    .map(
      (url, index) =>
        `<li>
      <a target="_blank" href="${url}">${url}</a>
      <button type="button" data-index="${index}" class="delete">Del</button>
      <button type="button" data-index="${index}" class="edit">Edit</button>
    </li>`
    )
    .join("");
};

addBtn.addEventListener("click", function () {
  const url = input.value.trim();
  if (url) {
    urlList.push(url);
    input.value = "";
    render();
  }
});

listRef.addEventListener("click", (event) => {
  const index = event.target.dataset.index;
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  if (event.target.classList.contains("edit")) {
    const newUrl = prompt("Редагуйте посилання", urlList[index]);
    if (newUrl) {
      urlList[index] = newUrl;
      render();
    }
  }

  if (event.target.classList.contains("delete")) {
    urlList.splice(index, 1);
    render();
  }
});



const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", userNameInput.value);
  localStorage.setItem("password", passwordInput.value);
});

addBookmarkBtn.addEventListener("click", () => {
    localStorage.setItem("bookmarkInput", addBookmarkBtn.value);
    localStorage.setItem("bookmarkInput", bookmarkInput.value);
})

window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  const savedUrl = localStorage.getItem("addBookmarkBtn");


  if (savedUsername) userNameInput.value = savedUsername;
  if (savedPassword) passwordInput.value = savedPassword;
  if (savedUrl) addBookmarkBtn.value = savedUrl;
});

