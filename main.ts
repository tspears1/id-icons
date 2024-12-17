//@ts-nocheck: temporarily
const data = await fetch('https://tspears1.github.io/id-icons/lib/icons.json').then(res => res.json())

const icons = [
   data.social.facebook.regular,
   data.social.facebook.bold,
   data.social.facebook.thin,
   data.social.instagram.regular,
   data.social.instagram.bold,
   data.social.instagram.thin
]

const createSvgStore = (icons: object[]): void => {
   const store = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
   store.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
   store.setAttribute('focuable', 'false')
   store.setAttribute('style', 'display: none;')
   store.id = 'svg-store'
   document.body.prepend(store)
   icons.forEach(icon => {
      store.innerHTML += icon.symbol
   })
}

// create stylesheet for css vars of each icon.data

createSvgStore(icons)