
export function mediaQuery(){
const x = window.matchMedia("(max-width: 340px)")

function mediaqueryHeaderName() {
    if (x.matches){
        document.querySelector(".header-name").innerHTML = "KIWI-MAI"
        document.querySelector("#header-title").innerHTML = "KIWI-MAI"
    } else {
        document.querySelector(".header-name").innerHTML = "{ KIWI-MAI }"
        document.querySelector("#header-title").innerHTML = "{ KIWI-MAI }"
    }
}

mediaqueryHeaderName()

x.addEventListener("change", function(){
    mediaqueryHeaderName();
})}

