import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;