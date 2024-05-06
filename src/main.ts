import './style.css'
import './observed-module.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <observed-module />
  </div>
`
