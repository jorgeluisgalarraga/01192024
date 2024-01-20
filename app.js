const body = document.querySelector("body") 
const newButton = document.createElement("button")


const changeColor = () => {
    body.style = "background-color: yellow;"
    if (body.style.backgroundColor == "yellow") {
        body.append(newButton)
        newButton.id = "newButton"
        newButton.textContent = "Blue"
    }
}
document.querySelector("button").addEventListener("click", changeColor)

const blues = () => {
    body.style.backgroundColor = "blue"
}
newButton.addEventListener("click", blues)
