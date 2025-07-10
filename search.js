const input = document.getElementById("searchInput");
const comicList = document.getElementById("comicList");
const comics = comicList.getElementsByTagName("li");

input.addEventListener("keyup", () => {
  const filter = input.value.toLowerCase();

  for (let i = 0; i < comics.length; i++) {
    const title = comics[i].getAttribute("data-title").toLowerCase();
    comics[i].style.display = title.includes(filter) ? "" : "none";
  }
});
