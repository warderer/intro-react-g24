import './styles/style.css'
import HolaMundo from './components/HolaMundo'

document.querySelector('#app').innerHTML = `
  <div>
      ${HolaMundo('Eduardo')}
  </div>
`
