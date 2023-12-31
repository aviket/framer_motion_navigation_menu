import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { faPersonBurst } from "@fortawesome/free-solid-svg-icons";

import { Entrypoint } from "./Entrypoint";
import HomeComponent from "./components/Homecomponent";
import Aboutcomponent from "./components/Aboutcomponent";
import Contactcomponent from "./components/Contactcomponent";
import Shopcomponent from './components/Shopcomponent';
import Blogcomponent from './components/Blogcomponent';


function App() {
  // Function to mount a component based on the argument

  const [currentComponent, setCurrentComponent] = useState('');

  const mountComponent = (componentName) => {
    console.log(componentName);
    switch (componentName) {
      case 'Home':
        return <HomeComponent />;
      case 'About':
        return <Aboutcomponent />;
      case 'Contact':
        return <Contactcomponent />;
      case 'Shop':
        return <Shopcomponent />;
      case 'Blog':
        return <Blogcomponent />;

      default:
        return null; // Handle invalid component names gracefully
    }
  };

  // Mount the 'Home' component by default
  useEffect(() => {
    setCurrentComponent(mountComponent('Home'));
  }, []);

  const navItemsarr = [
    { id: 1, txt: 'Home', icon: faHouse, fcallBack: () => setCurrentComponent(mountComponent('Home')) },
    { id: 2, txt: 'About', icon: faPersonBurst, fcallBack: () => setCurrentComponent(mountComponent('About')) },
    { id: 3, txt: 'Shop', icon: faCartShopping, fcallBack: () => setCurrentComponent(mountComponent('Shop')) },
    { id: 4, txt: 'Blog', icon: faSquareRss, fcallBack: () => setCurrentComponent(mountComponent('Blog')) },
    { id: 5, txt: 'Contact', icon: faAddressCard, fcallBack: () => setCurrentComponent(mountComponent('Contact')) },
  ];

  return (
    <>
      <Entrypoint navItems={navItemsarr} />
      {currentComponent}
    </>
  );
}

export default App;
