if ("serviceWorker" in navigator) {
window.addEventListener("load", () => {
navigator.serviceWorker && navigator.serviceWorker.register("service-worker.js");
});
}

$("th").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
});
