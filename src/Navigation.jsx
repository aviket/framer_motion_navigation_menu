import React , {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};



export const Navigation = ({navItems}) => {
  console.log("ff")
  console.log(navItems  )
  console.log("ff")
  const [activeComponent , setActiveComponent] = useState(0)
  const handleClick = (num) => {
     setActiveComponent(num + 2);
     console.log(num);

  };
  
  // const navItems = [{ id: 1, text: 'Home', icon: faHouse, fcallBack: { handleClick } }, { id: 2, text: 'About', icon: faAddressCard, fcallBack: { handleClick } }, { id: 3, text: 'Shop', icon: faCartShopping, fcallBack: { handleClick } }, { id: 4, text: 'Blog', icon: faSquareRss, fcallBack: { handleClick } }]
  return (
    <motion.ul variants={variants}>
      {navItems.map(i => (
        <MenuItem data={i} />
      ))}
    </motion.ul>
  );
};



