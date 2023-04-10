import { thumbHashToDataURL } from "https://cdn.skypack.dev/thumbhash"

document.querySelectorAll("main.homepage>article.card>img").forEach(img => {
    const thumbhash = Uint8Array.from(atob(img.dataset.thumbhash), c => c.charCodeAt(0))
    img.style.background = `center / cover url(${thumbHashToDataURL(thumbhash)})`
})