export function loadImg(url) {
  let img = new Image()
  img.src = url
  document.body.appendChild(img)
}
