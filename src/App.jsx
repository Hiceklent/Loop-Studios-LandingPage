import Footer from './components/common/footer/footer'
import Header from './components/common/header/header'
import Home from './pages/home/home'
import SectionPrimary from './components/main/SectionPrimary/SectionPrimary'
import SectionSecondary from './components/main/SectionSecondary/SectionSecondary'
import Imagen1 from './assets/images/mobile/image-hero.jpg'
import Imagen2 from './assets/images/mobile/image-interactive.jpg'

function App() {

  return (
    <>
      <Header />
      <Home />
      <div>
        <SectionPrimary backgroundImage={Imagen1}>
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          
        </SectionPrimary>

        <SectionSecondary
          imageSrc={Imagen2}
          altText="interactive"
          title="THE LEADER IN INTERACTIVE VR"
          description= " Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor imperdiet tempor vestibulum convallis cursus curabitur scelerisque, dis fringilla augue risus senectus non."/>
      </div>

      <Footer />
    </>
  )
}

export default App
