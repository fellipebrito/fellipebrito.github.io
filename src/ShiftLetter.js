// ShiftLetter.js
import React from 'react';
import { motion } from 'framer-motion';

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[25px] font-semibold text-2xs">
      <motion.span
        className="flex flex-col min-w-[6px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ShiftLetter;
