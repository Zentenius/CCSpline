"use client";

import { useState, useRef } from 'react';
import Spline from "@splinetool/react-spline";
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { AlignRight } from 'lucide-react';

export default function Home() {

  return (
    <main className="h-screen relative">
      <Spline
        scene="https://prod.spline.design/5U2EuxwzaCi6W2am/scene.splinecode"
        className="w-screen h-screen absolute top-0 z-[1]"
      
      />
       <nav className="absolute flex items-center top-0 w-full z-10">
        <div className="flex items-center justify-between p-6 w-full">
          <div className='w-14 h-14 rounded-full bg-black'>

          </div>
          
          <div>
          <AlignRight />
          </div>
        </div>
      </nav>
      
    </main>
  );
}
