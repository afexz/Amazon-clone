
import CarouselImage from './components/Carousel';
import './App.css';
import Header from './components/Header';
import Catagory from './components/Catagory';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselImage/>
      <Catagory/>
      <Product/>
      </div>
  );
}

export default App;
