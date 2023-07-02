import React, { useState, useEffect } from 'react';

function Numbers() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const limit1 = 30;
  const limit2 = 100;
  const limit3 = 700;
  const limit4 = 800;
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('numbers').offsetTop;

      if (scrollPosition > elementPosition && !animationTriggered) {
        animateCounts(true);
        setAnimationTriggered(true);
      }
    };

    const animateCounts = (isIncrement) => {
      let startTimestamp = null;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }

        const progress = timestamp - startTimestamp;
        const increment = Math.floor((progress / duration) * limit1);

        if (isIncrement && increment <= limit1) {
          setCount1(increment);
          setCount2(increment);
          setCount3(increment);
          setCount4(increment);
          requestAnimationFrame(step);
        } else if (!isIncrement && increment <= limit1) {
          setCount1(limit1 - increment);
          setCount2(limit2 - increment);
          setCount3(limit3 - increment);
          setCount4(limit4 - increment);
          requestAnimationFrame(step);
        } else if (!isIncrement) {
          setCount1(0);
          setCount2(0);
          setCount3(0);
          setCount4(0);
        } else {
          setCount1(limit1);
          setCount2(limit2);
          setCount3(limit3);
          setCount4(limit4);
        }
      };

      requestAnimationFrame(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [animationTriggered]);


  return (
    <div id="numbers" className="bg-[#0a0342] p-10 flex flex-col lg:flex-row md:flex-row justify-center md:gap-[0.5rem] gap-[2.5rem] lg:p-6 md:p-5 lg:gap-[6rem] items-center">
      <div className="flex lg:flex-row md:gap-[1.5rem]  lg:gap-[4rem] ">
        <div className="text-yellow-600">
          <h1 className="ml-8 tracking-widest text-center text-[3.5rem] lg:text-6xl font-semibold">{count1}+</h1>
          <h1 className="mt-6 text-center font-nav text-[2rem] lg:text-4xl">Made <br />Products</h1>
        </div>
        <div className="vertical-line hidden md:block lg:block mt-5"></div>
        <div className="text-yellow-600">
          <h1 className="ml-8 tracking-widest text-center font-semibold text-[3.5rem] lg:text-6xl">{count2}+</h1>
          <h1 className="mt-6 text-center font-nav text-[2rem] lg:text-4xl">Happy <br />Customers</h1>
        </div>
      </div>

      <div className="vertical-line block md:hidden lg:hidden"></div>

      <div className="flex lg:flex-row lg:gap-[4rem]">
        <div className="vertical-line hidden md:block lg:block mt-5"></div>
        <div className="text-yellow-600">
          <h1 className="ml-8 tracking-widest text-center font-semibold text-[3.5rem] lg:text-6xl">{count3}+</h1>
          <h1 className="mt-6 text-center font-nav text-[2rem] lg:text-4xl">Orders <br />Received</h1>
        </div>
        <div className="vertical-line hidden md:block lg:block mt-5"></div>
        <div className="text-yellow-600">
          <h1 className="ml-8 tracking-widest text-center font-semibold text-[3.5rem] lg:text-6xl">{count4}+</h1>
          <h1 className="mt-6 text-center font-nav text-[2rem] lg:text-4xl">Trusted <br />Clients</h1>
        </div>
      </div>

    </div>

  );
}

export default Numbers;
