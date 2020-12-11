import { add } from "./demo1"
import printMe from "./print.js"
import { loadImg } from "./loadimg"
import "./assets/scss/reset.css"
import "./assets/scss/style.css"
import rabbit from "./assets/images/rabbit.png"
import "./assets/less/index.less"
import "./main.js"

add(1, 2)
let title = document.createElement("h1")
title.innerHTML = "webpack-demo111"

document.body.appendChild(title)
function component() {
  const element = document.createElement("div")
  const btn = document.createElement("button")

  element.innerHTML = "Hello,webpack"

  btn.innerHTML = "Click me and check the console!"
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
loadImg(rabbit)

if (module.hot) {
  console.log("支持热更新")
  module.hot.accept("./print.js", function () {
    console.log("接收跟新!")
    printMe()
  })
}
