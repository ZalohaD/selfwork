var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

})

//progessbar
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
};

