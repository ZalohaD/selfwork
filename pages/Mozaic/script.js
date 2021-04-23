window.onload =() =>{
  setTimeout(()=>{
    document.querySelector('body').classList.add('display')
  }, 2000)
}

document.querySelector(".nav-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

  document.querySelector('.scroll-btn').addEventListener("click", () =>{
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() =>{
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
  })