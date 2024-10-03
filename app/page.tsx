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
          <img src='https://media.discordapp.net/attachments/895445208383250453/1291213708395151463/wWpexT9DtWMegAAAABJRU5ErkJggg.png?ex=66ff47f9&is=66fdf679&hm=213f4a991e06fc74b78efe9d3b0f3d620acb7c92d88220941b8bbeffc1011667&=&format=webp&quality=lossless&width=670&height=670' className='h-14 w-14'/>
          
          <div>
          <AlignRight />
          </div>
        </div>
      </nav>
      
    </main>
  );
}
