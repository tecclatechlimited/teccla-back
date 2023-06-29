import React, { useState } from 'react';

const Sidebar = ({ onItemClick }) => {
  return (
    <div>
      <ul>
        <li onClick={() => onItemClick('home')}>Home</li>
        <li onClick={() => onItemClick('about')}>About</li>
        <li onClick={() => onItemClick('contact')}>Contact</li>
      </ul>
    </div>
  );
};

const Home = () => {
  return <div>Home Component</div>;
};

const About = () => {
  return <div>About Component</div>;
};

const Contact = () => {
  return <div>Contact Component</div>;
};

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const renderContent = () => {
    if (selectedMenuItem === 'home') {
      return <Home />;
    } else if (selectedMenuItem === 'about') {
      return <About />;
    } else if (selectedMenuItem === 'contact') {
      return <Contact />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <Sidebar onItemClick={handleItemClick} />
      <div>{renderContent()}</div>
    </div>
  );
};

export default App;
