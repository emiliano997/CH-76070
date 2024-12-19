const a = document.querySelectorAll("a");

a.forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();

    console.log(link.href);
  });
});
