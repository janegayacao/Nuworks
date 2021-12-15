import './main.scss'
import './res.scss'
import Nav from './Nav'
import Footer from './Footer'
import Content from './Content'

export default function App() {
  return (
    <div class="wrapper">
      <Nav />
      <Content />        
      <Footer />
    </div>
  )
}
