import { icons } from './icons/icons.ts'

//fetch icons data
// const data = await fetch('https://tspears1.github.io/id-icons/icons.json').then(res => res.json())

// const icons = [data.social.facebook.regular, data.social.facebook.bold]

// const createSvgStore = () => {
//    const svgStore = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
//    svgStore.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
//    svgStore.setAttribute('focuable', 'false')
//    svgStore.setAttribute('style', 'display: none;')
//    svgStore.id = 'svg-store'
//    document.body.prepend(svgStore)
//    return Promise.resolve(svgStore)
// }


// const buildSymbol = (data: {id: string, viewBox: string, paths: string[]}): SVGSymbolElement => {
//    const { id, viewBox, paths } = data
//    const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol')
//    symbol.setAttribute('id', id)
//    symbol.setAttribute('viewBox', viewBox || '0 0 256 256')
//    symbol.innerHTML = paths.join('')
//    return symbol
// }

// createSvgStore().then(svgStore => {
//    icons.forEach(icon => {
//       const symbol = buildSymbol(icon)
//       svgStore.appendChild(symbol)
//    })
// })