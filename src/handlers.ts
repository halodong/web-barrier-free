import Wbf from './index'
import { getElText, getNotContainChildText, showBarDomId } from './util'

const overHandler = (
  e: { target: HTMLElement },
  wbf: Wbf
): void => {
  const notContainChildText = getNotContainChildText(e.target)
  if (notContainChildText.length === 0) return
  if (e.target !== document.body && e.target.tagName.toLowerCase() !== 'html' &&
  e.target.id !== showBarDomId) {
    /**
     * 1. Add style to the current node
     * 2. Read current node text
     * 3. Show to showbar
     */
    wbf.emphasize(e.target)
    const text = getElText(e.target, wbf.language)
    wbf.readMode === 'finger' && wbf.playAudio(text)

    if (wbf.showBarEl != null) {
      if (text.length > 150) {
        wbf.showBarEl.style.fontSize = '24px'
      } else if (text.length > 100) {
        wbf.showBarEl.style.fontSize = '26px'
      } else if (text.length > 50) {
        wbf.showBarEl.style.fontSize = '28px'
      } else if (text.length > 20) {
        wbf.showBarEl.style.fontSize = '30px'
      } else {
        wbf.showBarEl.style.fontSize = '32px'
      }
      wbf.showBarEl.innerText = text
    }
  }
}

const outHandler = (e: { target: HTMLElement }, wbf: Wbf): void => {
  // remove className
  wbf.removeEmphasize(e.target)
}
export { overHandler, outHandler }
