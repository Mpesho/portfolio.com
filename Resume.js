const download = document.querySelector("#download-button")

download.onclick = () => {
    console.log("Hello")
    setTimeout(() => {
        download.style.setProperty("--height", "100%")
        setTimeout(() => {
            download.style.setProperty("--height", "0%")
        }, 1000)
    }, 1000)
}