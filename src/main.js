import { HomePage } from './pages/home/index'
import Aos from 'aos'

Aos.init()

document.querySelector('#app').innerHTML = `
<div class="wrapper">
  ${HomePage()}
</div>
`
