// deno-lint-ignore-file no-explicit-any
import { symbolfy } from "../utils/symbolfy.ts"
import { deepMerge } from "../utils/deep-merge.ts"

import FBRegular from '@phosphor-icons/core/regular/facebook-logo.svg?raw'
import FBBold from '@phosphor-icons/core/bold/facebook-logo-bold.svg?raw'
import FBThin from '@phosphor-icons/core/thin/facebook-logo-thin.svg?raw'
import InstagramRegular from '@phosphor-icons/core/regular/instagram-logo.svg?raw'
import InstagramBold from '@phosphor-icons/core/bold/instagram-logo-bold.svg?raw'
import InstagramThin from '@phosphor-icons/core/thin/instagram-logo-thin.svg?raw'

/**
 * Generates an object with the icon data
 *
 * @param name
 * @param svg
 * @param style
 * @param folder
 * @returns
 */
const generateIconObject = (name: string, svg: string, style: string, folder: string) => {
    return {
        [folder]: {
            [name]: {
                [style]: {
                    id: `icon-${name}-${style}`,
                    svg: svg,
                    symbol: symbolfy(`icon-${name}-${style}`, svg),
                    data: `data:image/svg+xml,${encodeURIComponent(svg)}`
                }
            }
        }
    }
}

const iconData =[
    generateIconObject('facebook', FBRegular, 'regular', 'social'),
    generateIconObject('facebook', FBBold, 'bold', 'social'),
    generateIconObject('facebook', FBThin, 'thin', 'social'),
    generateIconObject('instagram', InstagramRegular, 'regular', 'social'),
    generateIconObject('instagram', InstagramBold, 'bold', 'social'),
    generateIconObject('instagram', InstagramThin, 'thin', 'social'),
]

// TODO: add version and updated date as part of publish process.
let icons: { [key: string]: any } = {
    version: '1.0.0',
    updated: new Date().toISOString(),
}
iconData.forEach(icon => {
    icons = deepMerge(icons, icon)
})

export { icons }