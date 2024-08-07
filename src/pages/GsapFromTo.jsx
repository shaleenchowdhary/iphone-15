import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#box',
      {
        x: 0,
        rotation: 0,
        borderRadius: '0%',
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: '100%',
        rotation: 360,
        duration: 2,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <div>
      <div id="box" className="h-20 w-20 rounded-md bg-red-500"></div>
    </div>
  );
};
export default GsapFromTo;
