import React from 'react';
import './App.css';
import jsontext from './Global.json';
import { FaRedditAlien } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

// Assuming the Footer component is in a separate file named Footer.js
import Footer from './Footer';  // Import the Footer component

const App = () => {

  const variables = [
    { label: jsontext.Poker.red01 },
    { label: jsontext.Poker.twi02 },
    { label: jsontext.Poker.you03 },
    { label: jsontext.Poker.ins04 },
    { label: jsontext.Poker.fac05 },
  ];

  return (
    <div className="app-container">  {/* Wrap content in a container */}
      <div id='imageback'>
        <div id='imagecolor'>
          {variables.map((item, index) => (
            <div id='designer' key={index}>
              <div style={{ marginRight: 5 }}>
                {index === 0 && <FaRedditAlien style={{ color: '#FF6100', fontSize: 40 }} />}
                {index === 1 && <FaXTwitter style={{ color: 'white', fontSize: 40 }} />}
                {index === 2 && <BsYoutube style={{ color: '#FD0001', fontSize: 40 }} />}
                {index === 3 && <RiInstagramFill style={{ color: '#B35CFF', fontSize: 40 }} />}
                {index === 4 && <FaFacebookSquare style={{ color: '#005EDD', fontSize: 40 }} />}
              </div>
              <div style={{ color: 'white', marginTop: -7, fontSize: 20, fontWeight: 'bold' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div id='imagecontainer01' />
        <div style={{ color: 'white', fontWeight: 'bold' }} id='hellobot'>
          {jsontext.Poker.nh01 + ' ' + jsontext.Poker.nh02}
        </div>
      </div>
      <Footer />  {/* Render the imported Footer component */}
    </div>
  );
};

export default App;
