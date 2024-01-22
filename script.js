document
    .getElementById("cursorImage")
    .addEventListener("mouseover", function () {
        document.body.style.cursor = 'url("images/rec.png"), auto'
    })

document
    .getElementById("cursorImage")
    .addEventListener("mouseout", function () {
        document.body.style.cursor = "auto"
    })
