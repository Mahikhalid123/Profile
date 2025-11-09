import Header from './components/navbar/Header'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Projects from './components/project/Projects'
import Experience from './components/experience/Experience'
import Skills from './components/skill/Skills'
import Achievements from './components/Achievement/Achievements'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Projects />
      <Experience />
      <Skills/>
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
