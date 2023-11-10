// Card.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ShiftLetter from './ShiftLetter';

const Card = ({ heading, imgSrc }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-48 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-100 md:group-hover:saturate-200 group-hover:scale-150 transition-all duration-500"
        style={{
          backgroundImage: `url(images/${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* <div className="relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between"> */}
        {/* <FiArrowRight className="text-xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" /> */}

      <div className="py-4 pb-0 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <div className='pr-3 '>
            <FiArrowRight className="text-xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        </div>
        <div>
            <h6 className="bg-black bg-opacity-50 text-white text-shadow-md p-1 text-center"> {/* text-sm makes the font smaller */}
            {heading.split('').map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h6>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
