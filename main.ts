
//fetch icons data
const data = await fetch('https://tspears1.github.io/id-icons/icons.json').then(res => res.json())

const icons = [data.social.facebook.regular, data.social.facebook.bold]

const createSvgStore = (icons: string[]) => {
   const svgStore = document.createElement('svg')
   svgStore.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
   svgStore.setAttribute('focuable', 'false')
   svgStore.setAttribute('style', 'display: none;')
   svgStore.id = 'svg-store'
   svgStore.innerHTML = icons.join('')
   document.body.prepend(svgStore)
}

createSvgStore(icons)
const app = document.querySelector('#app')
const svgContainer = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" style="color:black;"><use xlink:herf="#icon-facebook-regular" /></svg>`
app.innerHTML = svgContainer

document.querySelector('#app').innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"></path></svg>'