import './App.css'
import About from './components/About'
import BlurBackground from './components/BlurBackground'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
// import { SmoothScrollHero } from './components/SmoothScrollHero'

function App() {
    return (
        <>
            {/* <SmoothScrollHero /> */}
            <BlurBackground />
            <Navbar />
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Contacts />
            </main>
        </>
    )
}

export default App