// import { useState } from 'react'
// import './App.css'

// function App() {
 

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to CivicWeb</h1>
//           <p>Your one-stop solution for civic engagement.</p>
//         </header>
//         <main>
//           <section>
//             <h2>About Us</h2>
//             <p>We are dedicated to improving civic engagement through technology.</p>
//           </section>
//         </main>
//       </div>
//     </>
    
//   )
// }

// export default App


// src/App.tsx

import React from 'react';
import AuthModal from './components/Auth/AuthModal';
import './styles/global.css'; // optional global styles

const App = () => {
  return (
    <div className="app-container">
      <AuthModal />
    </div>
  );
};

export default App;
