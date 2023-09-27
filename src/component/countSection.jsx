import React, { useEffect, useState } from 'react';
import './CountSection.css';
import NumberCounter from './NumberCounterCode';
import { useInView } from 'react-intersection-observer';

function CountSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="countSection" ref={ref}>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={60} duration={3000} />}
          <span className="plus">+</span>
        </span>
        <span className="cities">Cities</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={30} duration={3000} />}k
          <span className="plus">+</span>
        </span>
        <span className="cities">Riders</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={10} duration={3000} />}M
          <span className="plus">+</span>
        </span>
        <span className="cities">Downloads</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={15} duration={3000} />}M
          <span className="plus">+</span>
        </span>
        <span className="cities">Customers</span>
      </h1>
    </section>
  );
}

export default CountSection;
