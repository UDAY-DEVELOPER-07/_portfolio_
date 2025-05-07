'use client'
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';

export default function BACKGROUND1() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    let effect: any;
  
    const initVanta = () => {
      if (!vantaEffect && myRef.current) {
        effect = TOPOLOGY({
          el: myRef.current,
          THREE: THREE,
          color: 0x00ff00,
          backgroundColor: 0x000000,
          points: 12,
          maxDistance: 20,
        });
        setVantaEffect(effect);
      }
    };
  
    const timeoutId = setTimeout(initVanta, 100);
  
    return () => {
      clearTimeout(timeoutId);
      if (effect) {
        effect.destroy();
        setVantaEffect(null);
      }
    };
  }, []);

  return( 
    <div 
      ref={myRef} 
      style={{ width: '100%', height: "100%",position: "fixed" , top: "0", left: "0", zIndex: "-1"}}/>);
};

