import * as React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];



export const MenuItem = (props) => {
  print(props.data)
  const style = { border: `1px solid ${colors[3]}`, background: `rgba(0, 0, 0, 0.2)` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={props.id}
    >

      <div className="icon-div" onClick={() => fcallBack}>
        <FontAwesomeIcon icon={props.data.icon} style={style} />
        <div className="text-placeholder" style={style} >{props.data.txt}</div>
      </div>


    </motion.li>
  );
};
