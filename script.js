const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const celebration = document.getElementById("celebration")

let noBtnClicks = 0
const maxNoBtnClicks = 5

yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden")
})

noBtn.addEventListener("click", () => {
  noBtnClicks++

  // Make the "Yes" button bigger
  const currentSize = Number.parseFloat(window.getComputedStyle(yesBtn).fontSize)
  yesBtn.style.fontSize = `${currentSize * 1.5}px`

  // Move the "No" button
  const maxX = window.innerWidth - noBtn.offsetWidth
  const maxY = window.innerHeight - noBtn.offsetHeight
  const newX = Math.random() * maxX
  const newY = Math.random() * maxY

  noBtn.style.position = "fixed"
  noBtn.style.left = `${newX}px`
  noBtn.style.top = `${newY}px`

  // Hide the "No" button after maxNoBtnClicks
  if (noBtnClicks >= maxNoBtnClicks) {
    noBtn.style.display = "none"
  }
})

// Make the website responsive
window.addEventListener("resize", () => {
  if (noBtn.style.position === "fixed") {
    const maxX = window.innerWidth - noBtn.offsetWidth
    const maxY = window.innerHeight - noBtn.offsetHeight
    const newX = Math.min(Number.parseFloat(noBtn.style.left), maxX)
    const newY = Math.min(Number.parseFloat(noBtn.style.top), maxY)

    noBtn.style.left = `${newX}px`
    noBtn.style.top = `${newY}px`
  }
})

