import React from 'react';
import { motion } from 'framer-motion';

const PostHeader = ({ title, image }) => {
  const bannerStyle = {
    backgroundImage: image ? `url(/images/${image})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '350px', // Set your desired height here
  };

  const imageVariants = {
    zoomedIn: {
      scale: 1.2, // Adjust the zoom level as needed
      x: -20, // Adjust the horizontal position as needed
      y: -20, // Adjust the vertical position as needed
    },
  };

  const textVariants = {
    static: {},
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={bannerStyle}
        initial="initial"
        animate="zoomedIn"
        variants={imageVariants}
        className="transition-transform duration-1000 ease-in-out transform-gpu"
      >
        {/* Use the title as the header text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <motion.h2
            className="text-4xl font-semibold text-white p-4"
            variants={textVariants}
          >
            {title}
          </motion.h2>
        </div>
      </motion.div>
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1, yoyo: Infinity }}
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-white-1000"
    />
  );
};

export default PostHeader;
