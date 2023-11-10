import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Example = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('posts.json')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <div className="px-4 py-4 pb-1 md:p-8 bg-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <Card
            key={index}
            heading={post.metadata.title}
            imgSrc={post.metadata.image} // Assuming the URL is in the metadata
          />
        ))}
      </div>
    </div>
  );
};


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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="px-4 py-4 pb-1 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h6>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h6>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[30px] font-semibold text-xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
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

export default Example;