import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer';
import { StyleSheet, css } from 'aphrodite';
import { FeaturedItem } from './FeaturedItem';
import {ProductFeature} from './ProductFeature'

function App() {
  return (
    <div className="App">
      <FeaturedItem />
      <ProductFeature />
      <Footer />
    </div>
  );
}


export default App;
