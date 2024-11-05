const loaderEl = document.querySelector(".loader");



const loaderTogller = (info) => {
    if (info) {
        loaderEl.classList.remove("hidden")
    } else{
        loaderEl.classList.add("hidden")
    }
};
    




export default loaderTogller;