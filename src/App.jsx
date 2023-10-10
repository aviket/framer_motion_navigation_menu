import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";

import { Entrypoint } from "./Entrypoint";
import HomeComponent from "./components/Homecomponent";
import Aboutcomponent from "./components/Aboutcomponent";
import Contactcomponent from "./components/Contactcomponent";

function App() {
    // Function to mount a component based on the argument

    const [currentComponent , setcurrentComponent ] = useState('Home')

    const mountComponent = (componentName) => {
      switch (componentName) {
        case 'Home':
          return <HomeComponent />;
        case 'About':
          return <Aboutcomponent />;
        case 'Contact':
          return <Contactcomponent />;
        default:
          return null; // Handle invalid component names gracefully
      }
    };
  
    // Example: Mount the 'Home' component
    const mountedComponentHome = mountComponent('Home');
    const mountedComponentAbout = mountComponent('About');
    const mountedComponentContact = mountComponent('Contact');
    const mountedComponentBlog = mountComponent('Contact');

    const navItemsarr = [
      { id: 1, text: 'Home', icon: faHouse, fcallBack:  () =>  mountComponent('Home') },
      { id: 2, text: 'About', icon: faAddressCard, fcallBack: () =>  mountComponent('About') },
      { id: 3, text: 'Shop', icon: faCartShopping, fcallBack: () =>  mountComponent('Home') },
      { id: 4, text: 'Blog', icon: faSquareRss, fcallBack: () =>  mountComponent('Home') },
    ];
  return (
    <>
      <Entrypoint navItems={navItemsarr} />
     <HomeComponent />
    </>
  )
}

export default App
