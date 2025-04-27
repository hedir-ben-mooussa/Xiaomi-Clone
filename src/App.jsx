import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { StoreLocation } from './components/location/location'
import { WelcomeSection } from './components/welcome-section/welcome'
import { ProductList } from './components/product-list/productList';
import { RedmiProducts } from './components/redmiProduct/redmiProduct';
import { VideoList } from './components/video-section/video';
import { XiaomiProducts } from './components/location/xiaomiProducts/xiaomiProducts';

function App() {
  

  return (
    <>
    <Header></Header>
    <WelcomeSection></WelcomeSection>
    <ProductList></ProductList>
    <RedmiProducts></RedmiProducts>
    <XiaomiProducts></XiaomiProducts>
    <VideoList></VideoList>
    <StoreLocation></StoreLocation>
    <Footer></Footer>
    </>
  )
}

export default App
