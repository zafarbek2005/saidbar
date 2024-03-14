const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-btn");
const bt = document.querySelector(".bt");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
bt.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})