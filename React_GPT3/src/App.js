import React from 'react';
import './App.css';
import { Brand, CTA, Navbar, Feature} from './components';
import {Blog, Features, Footer, GPT3, Header, Possibility} from './containers';




function App() {
  return (
    <div className='app'>
      <div className="gradient_bg  ">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Feature/>
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App