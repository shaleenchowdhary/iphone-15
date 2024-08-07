import gsap from 'gsap';
import { useEffect } from 'react';

const GsapTo = () => {
  useEffect(() => {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'elastic',
    });
  }, []);

  return (
    <div>
      <div id="blue-box" className="h-20 w-20 rounded-md bg-blue-500"></div>
    </div>
  );
};
export default GsapTo;
