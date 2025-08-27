import AboutUs from "./components/AboutUs.jsx"
import Contact from "./components/Contact.jsx"
import Events from "./components/Events.jsx"
import Footer from "./components/Footer.jsx"
import Gallery from "./components/Gallery.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import InteractiveMenu from "./components/InteractiveMenu.jsx"
import Menu from "./components/Menu.jsx"
import Specials from "./components/Specials.jsx"

function App() {


  return (
   // Sử dụng Fragment <>...</> để bọc các component
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Menu />  
        <InteractiveMenu />
        <Specials />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </main>
      {/* Footer sẽ được thêm vào đây */}
    </>
  )
}

export default App
