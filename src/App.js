
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Greeter from './components/Greeter/Greeter'
import Calculator from './components/Calculator/Calculator'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Blogpost from './components/Blogpost/Blogpost';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Greeter' element={<Greeter />} />
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Blogpost' element={<Blogpost />} />
        <Route path='/About' element={<About />} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
