
document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    var info = document.getElementById("info");//ELEMENTO A MODIFICAR
    var menu = document.getElementById("menu-responsive");
    var menuClosed = document.getElementById("menu-responsive-closed");

    if (menu) {
        menu.addEventListener("click", () => {
            console.log("asd");
            info.classList.add("check")
        });
    }
    if (menuClosed) {
        menuClosed.addEventListener("click", () => {
            console.log("dsa");
            info.classList.remove("check")
        })
    }
    
});
