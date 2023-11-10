import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          I'm FELLIPE BRITO,
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          This corner of the internet is an invitation: come, pull up a chair.
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Let’s talk about the mysteries of faith, the precision of a well-struck golf swing, and the tales that inspire us to look beyond the horizon.
          Here's to the pursuit of meaning, the celebration of life, and the joy of connection.
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};  

const squareData = [
  {
    id: 1,
    src: "/images/hero/1.jpg",
  },
  {
    id: 2,
    src: "/images/hero/2.jpg",
  },
  {
    id: 3,
    src: "/images/hero/3.jpg",
  },
  {
    id: 4,
    src: "/images/hero/4.jpg",
  },
  {
    id: 5,
    src: "/images/hero/5.jpg",
  },
  {
    id: 6,
    src: "/images/hero/6.jpg",
  },
  {
    id: 7,
    src: "/images/hero/7.jpg",
  },
  {
    id: 8,
    src: "/images/hero/8.jpg",
  },
  {
    id: 9,
    src: "/images/hero/9.jpg",
  },
  {
    id: 10,
    src: "/images/hero/10.jpg",
  },
  {
    id: 11,
    src: "/images/hero/11.jpg",
  },
  {
    id: 12,
    src: "/images/hero/12.jpg",
  },
  {
    id: 13,
    src: "/images/hero/13.jpg",
  },
  {
    id: 14,
    src: "/images/hero/14.jpg",
  },
  {
    id: 15,
    src: "/images/hero/15.jpg",
  },
  {
    id: 16,
    src: "/images/hero/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'indigo', 'purple', 'pink'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    const brightness = ['500', '600', '700']; // Different brightness levels
    const randomBrightness = brightness[Math.floor(Math.random() * brightness.length)];
    return `${randomColor}-${randomBrightness}`;
  };
  
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Header;