import React, { useState, useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';


const ScrollUpDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isVisible = scrollPosition > 0.5 * window.innerHeight; // 50vh

      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-buttons-container ${isVisible ? 'visible' : ''} flex flex-row sm:flex-col justify-center items-center`}>
      <button className="scroll-button rounded-full" onClick={scrollToTop}>
        <AiOutlineArrowUp className='bounce-animation' size={25}/>
      </button>
      <button className="scroll-button rounded-full" onClick={scrollToBottom}>
        <AiOutlineArrowDown className='bounce-animation' size={25}/>
      </button>
    </div>
  );
};

export default ScrollUpDown;
