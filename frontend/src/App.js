import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer';
import { StyleSheet, css } from 'aphrodite';
import { FeaturedItem } from './FeaturedItem';

function App() {
  return (
    <div className="App">
      <FeaturedItem />
      <Footer />
    </div>
  );
}


export default App;
