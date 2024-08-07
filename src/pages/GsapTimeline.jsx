import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to('#box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    });

    timeline.to('#box', {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    });

    timeline.to('#box', {
      x: 500,
      rotation: 360,
      scale: 1,
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut',
    });
  }, []);

  return (
    <div className="flex gap-4 flex-col items-start">
      <button
        id="control"
        className="p-3 bg-gray-400 rounded-md"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button>
      <div id="box" className="h-20 w-20 rounded-md bg-yellow-500"></div>
    </div>
  );
};

export default GsapTimeline;
