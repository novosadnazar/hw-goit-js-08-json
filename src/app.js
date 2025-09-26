const inputEl = document.querySelector("#bookmarkInput");
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
  const url = inputEl.value.trim();
  if (url) {
    urlList.push(url);
    inputEl.value = "";
    render();

  
    localStorage.setItem("urlList", JSON.stringify(urlList));
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
      localStorage.setItem("urlList", JSON.stringify(urlList));
    }
  }

  if (event.target.classList.contains("delete")) {
    urlList.splice(index, 1);
    render();
    localStorage.setItem("urlList", JSON.stringify(urlList));
  }
});


const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", userNameInput.value);
  localStorage.setItem("password", passwordInput.value);
});


window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  const savedUrls = localStorage.getItem("urlList");

  if (savedUsername) userNameInput.value = savedUsername;
  if (savedPassword) passwordInput.value = savedPassword;

  if (savedUrls) {
    urlList = JSON.parse(savedUrls);
    render();
  }
});
